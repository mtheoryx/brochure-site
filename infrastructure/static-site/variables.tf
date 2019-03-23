variable "app-name" {
  type        = "string"
  description = "Name of the application"
  default     = "in-stl"
}

variable "managed" {
  type        = "string"
  description = "Terraform version used"
  default     = "Terraform v0.11.10"
}
