#!/bin/bash -v
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

git clone https://github.com/mark-poussard/tsx-lib.git "$parent_path/../tsx-lib"