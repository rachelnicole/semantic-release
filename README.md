# Punchcard Semantic Release [![Build Status](https://travis-ci.org/punchcard-cms/semantic-release.svg?branch=master)](https://travis-ci.org/punchcard-cms/semantic-release) [![Coverage Status](https://coveralls.io/repos/github/punchcard-cms/semantic-release/badge.svg?branch=master)](https://coveralls.io/github/punchcard-cms/semantic-release?branch=master) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[Semantic Release](https://github.com/semantic-release/semantic-release) analysis and notes generation for use with [Punchcard Commit Messages](https://github.com/punchcard-cms/commit-msg).

## Usage

Follow the [Semantic Release](https://github.com/semantic-release/semantic-release) setup instructions, then do the following:

**Install**

```
npm i punchcard-semantic-release --save-dev
```

**package.json**

```json
"release": {
  "analyzeCommits": "punchcard-semantic-release/analyze",
  "generateNotes": "punchcard-semantic-release/notes"
}
```
