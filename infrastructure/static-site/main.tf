# Create a logging bucket for the static site access
resource "aws_s3_bucket" "in-stl-static-site-bucket-logs" {
  bucket = "${var.app-name}-static-site-bucket-logs"
  acl    = "log-delivery-write"

  lifecycle {
    prevent_destroy = true
  }

  tags {
    Name    = "${var.app-name} Static Site Bucket Logs"
    Managed = "${var.managed}"
    Purpose = "Logging"
  }
}

# Create an S3 bucket
resource "aws_s3_bucket" "in-stl-static-site-bucket" {
  bucket = "${var.app-name}-static-site-bucket"
  acl    = "public-read"

  lifecycle {
    prevent_destroy = true
  }

  versioning {
    enabled = true
  }

  logging {
    target_bucket = "${aws_s3_bucket.in-stl-static-site-bucket-logs.bucket}"
    target_prefix = "${var.app-name}-static-site-bucket/"
  }

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  tags {
    Name    = "${var.app-name} Static Site Bucket"
    Managed = "${var.managed}"
    Purpose = "Website"
  }
}

# Policy document
data "aws_iam_policy_document" "static-client-bucket-policy-data" {
  statement {
    sid    = "StaticBucketPublicReadPolicy"
    effect = "Allow"

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
      "s3:ListBucket",
    ]

    resources = [
      "${aws_s3_bucket.in-stl-static-site-bucket.arn}/*",
      "${aws_s3_bucket.in-stl-static-site-bucket.arn}",
    ]
  }
}

# Policy attachment
resource "aws_s3_bucket_policy" "static-client-bucket-policy" {
  bucket = "${aws_s3_bucket.in-stl-static-site-bucket.id}"
  policy = "${data.aws_iam_policy_document.static-client-bucket-policy-data.json}"
}
