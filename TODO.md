# FIXME : esbuild architecture error

## Error Message

```
You installed esbuild for another platform than the one you're currently using. This won't work because esbuild is written with native code and needs to install a platform-specific binary executable. Specifically the "esbuild-linux-64" package is present but this platform needs the "esbuild-darwin-arm64" package instead. People often get into this situation by installing esbuild on Windows or macOS and copying "node_modules" into a Docker image that runs Linux, or by copying "node_modules" between Windows and WSL environments. If you are installing with npm, you can try not copying the "node_modules" directory when you copy the files over, and running "npm ci" or "npm install" on the destination platform after the copy. Or you could consider using yarn instead of npm which has built-in support for installing a package on multiple platforms simultaneously. If you are installing with yarn, you can try listing both this platform and the other platform in your ".yarnrc.yml" file using ...
```

# TODO

1. Generate color palette
2. Deploy
3. Add React components for display the C4 Landscape
4. Simple Design System
5. Remove boilerplate and create initial file structure
6.
