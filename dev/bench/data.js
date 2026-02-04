window.BENCHMARK_DATA = {
  "lastUpdate": 1770236822713,
  "repoUrl": "https://github.com/npequeux/rtop",
  "entries": {
    "Performance Metrics": [
      {
        "commit": {
          "author": {
            "email": "npequeux@users.noreply.github.com",
            "name": "Nicolas Pequeux",
            "username": "npequeux"
          },
          "committer": {
            "email": "npequeux@users.noreply.github.com",
            "name": "Nicolas Pequeux",
            "username": "npequeux"
          },
          "distinct": true,
          "id": "1bb6b5495ca49bfbf0ae0bca7927b7088e749bf8",
          "message": "fix: Pre-fetch gh-pages branch for benchmark action\n\nAdd step to fetch gh-pages branch before running benchmark action to avoid fetch errors",
          "timestamp": "2026-02-04T21:20:01+01:00",
          "tree_id": "677cbbc2156d3a5b16f193c8cf9426be8e9b7050",
          "url": "https://github.com/npequeux/rtop/commit/1bb6b5495ca49bfbf0ae0bca7927b7088e749bf8"
        },
        "date": 1770236467439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (bytes)",
            "value": 3409752,
            "unit": "bytes"
          },
          {
            "name": "Build Time",
            "value": 55.21,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "npequeux@users.noreply.github.com",
            "name": "Nicolas Pequeux",
            "username": "npequeux"
          },
          "committer": {
            "email": "npequeux@users.noreply.github.com",
            "name": "Nicolas Pequeux",
            "username": "npequeux"
          },
          "distinct": true,
          "id": "90414c91773873000dd55586e52594bfd40a4434",
          "message": "perf: Optimize Docker workflow for faster builds\n\nSpeed improvements:\n- Skip Docker builds on docs-only changes (paths-ignore)\n- Build only amd64 on PRs (multi-arch only on master/tags) - saves 50% time\n- Add BUILDKIT_INLINE_CACHE for better layer reuse\n- Fix Dockerfile fingerprint cleanup for better caching\n\nEstimated time: 8-10 min → 3-4 min (PR), 6-8 min (master)",
          "timestamp": "2026-02-04T21:25:40+01:00",
          "tree_id": "b6d21bf020af25f9a0720b0bc7d22281ae194670",
          "url": "https://github.com/npequeux/rtop/commit/90414c91773873000dd55586e52594bfd40a4434"
        },
        "date": 1770236822314,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size (bytes)",
            "value": 3409752,
            "unit": "bytes"
          },
          {
            "name": "Build Time",
            "value": 0,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}