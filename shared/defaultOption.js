const DEFAULT_IMAGE_SRC =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABWCAMAAAAHZWO6AAAAKlBMVEXy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8W37AjAAACRklEQVRo3u2Za3bEIAiFg8+ouP/t9kem0yQKomXanp5hAX4mXC6i2/YOYUDKurHfAAarbuTfAJSkFdgHRLWMpjfgDfg5ALgQgzevAphYaq21YrIvAbjyrHuMoA9wF3eK6gBTruYVtAH7zR2L0QXYxr6DLiC0Bg+qgNQA0GgCoAOwr/4CXcDeAIrqL9p8A0jMmQfmAfc6q9XTgJBgvtCiXKUO6w7zVpGvKXbk+rY0ZSgyO3v+SUjX8bGT6wZkdm2+pFroBMBDb8XONxzwCWutmAOj0GeuslnpycY5ZzkT8l+meEq0XtO/dKWoD7hWC3ptwN0Sn4lWAkBjWJ+JVgK0Tak+PEMH4HpDUdQD2NKbnI5EawBuXnU1rTUABMv21FNjWgOEs2VHer5MsAZweHIDz029O6wAjpxGRkCnM9oC4JHTQySm8EM4zs/Jz5yi654rZZN+FLj+cXrxqAw4L5ig7xLfAVxzukPP574DuOc0soU2D2jWQi9Q0gRg7/vNQEpyQCD8ZiAlMaBftGMpSQG2UH4zkJL0XJRJvxlISXhXQe9xJCUZIHKOxktJBOB1wktJAhiZZgLmIyXH9zzyG05KY8DQbT6llBcBUXB/zEhpCAhVEuioYh8BnPCynJTSAGCL9JadkhIPgFzFQUiJBYwb4lhKLCDMrE9IiQP4ydcQtB1VMAB5gjkp0QCT63R0pEQCJA4hkRIJiHUpGilRALv68GS2bTMhHlG4X7T4kvg3HihAKwgAFq3AX3rL1AXc1AJx142w/Zf4AH4Xp03JwAN4AAAAAElFTkSuQmCC'
const DEFAULT_FAVICON_SRC =
  'data:image/png;base64,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'
const DEFAULT_URL = 'https://github.com'

const DEFAULT_TIMEOUT = 30000

const defaultOption = {
  delimiter: '$card',
  image: DEFAULT_IMAGE_SRC,
  favicon: DEFAULT_FAVICON_SRC,
  timeout: DEFAULT_TIMEOUT,
  error: {
    title: 'Not Found Site',
    description: 'Cannot find site or meta tag and title.',
    url: DEFAULT_URL,
  }
}
const ID = `gatsby-remark-link-preview`

module.exports = {
  defaultOption,
  ID,
}
