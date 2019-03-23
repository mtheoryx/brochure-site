# Possible outputs
# id
# arn
# bucket_domain_name
# bucket_regional_domain_name
# hosted_zone_id
# region
# website_endpoint (if configured as a site)
# website_domain (if configured as a site)
#
# Log Bucket Prod
output "in-stl-static-site-bucket-logs.id" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket-logs.id}"
}

output "in-stl-static-site-bucket-logs.arn" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket-logs.arn}"
}

output "in-stl-static-site-bucket-logs.bucket_domain_name" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket-logs.bucket_domain_name}"
}

output "in-stl-static-site-bucket-logs.bucket_regional_domain_name" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket-logs.bucket_regional_domain_name}"
}

output "in-stl-static-site-bucket-logs.hosted_zone_id" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket-logs.hosted_zone_id}"
}

output "in-stl-static-site-bucket-logs.region" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket-logs.region}"
}

# Static site Prod Bucket
output "in-stl-static-site-bucket.id" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket.id}"
}

output "in-stl-static-site-bucket.arn" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket.arn}"
}

output "in-stl-static-site-bucket.bucket_domain_name" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket.bucket_domain_name}"
}

output "in-stl-static-site-bucket.bucket_regional_domain_name" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket.bucket_regional_domain_name}"
}

output "in-stl-static-site-bucket.hosted_zone_id" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket.hosted_zone_id}"
}

output "in-stl-static-site-bucket.region" {
  value = "${aws_s3_bucket.in-stl-static-site-bucket.region}"
}

# Log Bucket Dev
output "in-stl-dev-static-site-bucket-logs.id" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket-logs.id}"
}

output "in-stl-dev-static-site-bucket-logs.arn" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket-logs.arn}"
}

output "in-stl-dev-static-site-bucket-logs.bucket_domain_name" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket-logs.bucket_domain_name}"
}

output "in-stl-dev-static-site-bucket-logs.bucket_regional_domain_name" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket-logs.bucket_regional_domain_name}"
}

output "in-stl-dev-static-site-bucket-logs.hosted_zone_id" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket-logs.hosted_zone_id}"
}

output "in-stl-dev-static-site-bucket-logs.region" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket-logs.region}"
}

# Dev Static Site Bucket Outputs
output "in-stl-dev-static-site-bucket.id" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket.id}"
}

output "in-stl-dev-static-site-bucket.arn" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket.arn}"
}

output "in-stl-dev-static-site-bucket.bucket_domain_name" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket.bucket_domain_name}"
}

output "in-stl-dev-static-site-bucket.bucket_regional_domain_name" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket.bucket_regional_domain_name}"
}

output "in-stl-dev-static-site-bucket.hosted_zone_id" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket.hosted_zone_id}"
}

output "in-stl-dev-static-site-bucket.region" {
  value = "${aws_s3_bucket.in-stl-dev-static-site-bucket.region}"
}
