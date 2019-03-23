provider "aws" {
  region  = "us-east-2"
  version = "~> 1.55"
}

# What S3 bucket
terraform {
  required_version = "0.11.10"

  backend "s3" {
    bucket         = "static-brochure-in-stl-tf-global-state"
    key            = "static.tfstate"
    region         = "us-east-2"
    encrypt        = true
    dynamodb_table = "global-terraform-lock"
  }
}
