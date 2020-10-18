#!/bin/bash

PROTO_DIR=./src

# Generate JavaScript code; ideally if i was to deploy this to server, i will but the out dir to the /www folder fro prod or stag
./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    -I ./src \
    ./src/*.proto

# Generate TypeScript code (d.ts); I will use this file for dev only
./node_modules/.bin/grpc_tools_node_protoc \
    --ts_out=${PROTO_DIR} \
    -I ./src \
    ./src/*.proto


    