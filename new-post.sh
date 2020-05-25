#!/usr/bin/env bash
set -e

if [ "$2" = "" ] ; then

echo "Parametros faltando. Execute 'yarn post:new '<titulo do post>' '<autor do post>'"

else

TITLE="$1"
AUTHOR="$2"
ACTUAL_DATE=$(date '+%Y-%m-%d')
SLUGIFIED_TITLE="$(echo -n "${TITLE}" | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z)"
PATH_FILE="${ACTUAL_DATE}-${SLUGIFIED_TITLE}"
POSTS_PATH="./src/content/posts/"

mkdir $POSTS_PATH$PATH_FILE

cat > "$POSTS_PATH$PATH_FILE/$PATH_FILE.md" << EOF
---
id: '$SLUGIFIED_TITLE'
title: '$TITLE'
author: '$AUTHOR'
featuredImage: exampleImg.jpg
tags: [ tags, here ]
---

### Titulo

-Conteúdo de exemplo aqui-
EOF

umask 0777
chmod go+r "$POSTS_PATH$PATH_FILE/$PATH_FILE.md"

echo "Post '${PATH_FILE}' criado!"

fi
