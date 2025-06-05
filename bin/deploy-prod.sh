#!/bin/bash

aws s3 sync out/_next s3://justnote-docs/_next --size-only --cache-control max-age=31536000 --profile justnote

aws s3 sync out/nextImageExportOptimizer s3://justnote-docs/nextImageExportOptimizer --size-only --cache-control max-age=31536000 --profile justnote

aws s3 sync out s3://justnote-docs --exclude "_next/*" --exclude "nextImageExportOptimizer/*" --delete --cache-control max-age=86400 --profile justnote

aws cloudfront create-invalidation --distribution-id E3HANMO243DZ3Y --paths "/*" --profile justnote
