# Create a logging bucket for the static site access

# Create an S3 bucket
resource "aws_s3_bucket" "in-stl-static-site-bucket" {
  bucket = "in-stl-static-site-bucket"
  acl    = "public-read"

  lifecycle {
    prevent_destroy = true
  }

  versioning {
    enabled = true
  }

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  tags {
    Name    = "Static Site Bucket"
    Managed = "Terraform v0.11.10"
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
