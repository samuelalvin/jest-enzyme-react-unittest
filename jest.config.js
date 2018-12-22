module.exports = {
    "moduleFileExtensions": [
        "tsx",
        "ts",
        "jsx",
        "js"
    ],
    "roots": [
        "src"
    ],
    "testMatch": [
        "**/?(*.)spec.ts?(x)"
    ],
    "transform": {
        "^.+\\.(t|j)s?(x)$": "ts-jest"
    },
    "modulePaths": ["<rootDir>/src"]
}