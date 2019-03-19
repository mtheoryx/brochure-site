# We need the provider
provider "aws" {
  region  = "us-east-2"
  version = "~> 1.55"
}

# We need an S3 bucket
resource "aws_s3_bucket" "global-tf-state" {
  bucket = "static-brochure-in-stl-tf-global-state"
  acl    = "private"

  lifecycle {
    prevent_destroy = true
  }

  versioning {
    enabled = true
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  tags {
    Name    = "Global Terraform State"
    Managed = "Terraform v0.11.10"
  }
}

# We need a dynamo db table
resource "aws_dynamodb_table" "global-tf-state-lock" {
  name           = "global-terraform-lock"
  hash_key       = "LockID"
  read_capacity  = 5
  write_capacity = 5

  attribute {
    name = "LockID"
    type = "S"
  }

  tags {
    Name    = "Global Terraform Lock Table"
    Managed = "Terraform v0.11.10"
  }
}
