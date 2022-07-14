#!/bin/sh

wget https://raw.githubusercontent.com/ethereum/solidity/db2b066d40210f4c8fffb91d12b1300e15e0fb5c/docs/style-guide.rst
for rst in *.rst; do pandoc "$rst" -f rst -t markdown -o "${rst%.*}.md"; done
exit 0

