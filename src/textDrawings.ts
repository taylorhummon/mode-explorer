import { SolfegeName, NoteName } from "./enumerations";

/*
iOS Webkit does not (yet) support animating <text> elements within an SVG via the offset-path property.
As a workaround, we'll draw note names as paths instead of using <text> elements.
*/

export const DRAWING_BY_SOLFEGE_NAME = {
  [SolfegeName.Do]: "M 0 12.762 L 0 0.144 Q 0.684 0.054 1.431 0.027 A 49.713 49.713 0 0 1 1.96 0.011 Q 2.167 0.005 2.352 0.003 A 24.52 24.52 0 0 1 2.7 0 A 9.546 9.546 0 0 1 3.854 0.066 Q 4.444 0.138 4.945 0.289 A 4.937 4.937 0 0 1 5.445 0.468 Q 6.552 0.936 7.227 1.773 A 4.946 4.946 0 0 1 8.024 3.207 A 6.065 6.065 0 0 1 8.199 3.78 Q 8.496 4.95 8.496 6.354 A 11.001 11.001 0 0 1 8.243 8.737 A 10.275 10.275 0 0 1 8.226 8.811 Q 7.956 9.99 7.29 10.899 A 4.58 4.58 0 0 1 5.969 12.1 A 5.603 5.603 0 0 1 5.499 12.357 A 5.02 5.02 0 0 1 4.341 12.747 Q 3.804 12.861 3.182 12.893 A 9.664 9.664 0 0 1 2.682 12.906 A 15.181 15.181 0 0 1 2.556 12.905 Q 2.382 12.904 2.148 12.899 A 48.386 48.386 0 0 1 2.07 12.897 Q 1.692 12.888 1.296 12.861 Q 0.9 12.834 0.54 12.816 Q 0.246 12.801 0.072 12.775 A 1.63 1.63 0 0 1 0 12.762 Z M 10.526 6.825 A 6.765 6.765 0 0 0 10.386 8.244 A 7.212 7.212 0 0 0 10.398 8.671 A 6.185 6.185 0 0 0 10.647 10.098 A 4.695 4.695 0 0 0 10.735 10.362 A 3.986 3.986 0 0 0 11.448 11.592 A 3.562 3.562 0 0 0 11.863 12.003 A 4.011 4.011 0 0 0 12.816 12.591 A 4.12 4.12 0 0 0 13.808 12.884 A 5.694 5.694 0 0 0 14.76 12.96 Q 15.804 12.96 16.623 12.627 Q 17.442 12.294 18 11.682 A 3.733 3.733 0 0 0 18.395 11.164 A 4.334 4.334 0 0 0 18.846 10.197 A 5.478 5.478 0 0 0 19.053 9.333 A 6.989 6.989 0 0 0 19.134 8.244 A 7.212 7.212 0 0 0 19.122 7.817 A 6.185 6.185 0 0 0 18.873 6.39 A 4.695 4.695 0 0 0 18.785 6.126 A 3.986 3.986 0 0 0 18.072 4.896 Q 17.532 4.266 16.713 3.897 Q 16.246 3.687 15.676 3.596 A 5.847 5.847 0 0 0 14.76 3.528 A 5.626 5.626 0 0 0 13.483 3.665 A 3.676 3.676 0 0 0 11.52 4.797 A 3.979 3.979 0 0 0 11.199 5.207 Q 10.724 5.905 10.526 6.825 Z M 1.494 1.422 L 1.494 11.502 A 0.971 0.971 0 0 0 1.555 11.512 Q 1.616 11.52 1.701 11.526 A 3.932 3.932 0 0 0 1.755 11.529 Q 1.926 11.538 2.106 11.547 Q 2.286 11.556 2.457 11.565 A 8.96 8.96 0 0 0 2.539 11.569 Q 2.639 11.573 2.713 11.574 A 2.841 2.841 0 0 0 2.736 11.574 A 6.575 6.575 0 0 0 3.581 11.523 Q 4.024 11.466 4.392 11.343 A 3.134 3.134 0 0 0 4.869 11.142 A 3.381 3.381 0 0 0 5.749 10.486 A 3.061 3.061 0 0 0 6.138 9.981 A 4.443 4.443 0 0 0 6.647 8.78 A 5.385 5.385 0 0 0 6.75 8.307 Q 6.912 7.362 6.912 6.354 Q 6.912 5.472 6.768 4.581 Q 6.624 3.69 6.183 2.97 Q 5.742 2.25 4.923 1.791 A 3.255 3.255 0 0 0 4.116 1.479 Q 3.748 1.387 3.315 1.353 A 6.835 6.835 0 0 0 2.772 1.332 Q 2.533 1.332 2.171 1.348 A 24.843 24.843 0 0 0 2.133 1.35 A 5.869 5.869 0 0 0 1.872 1.368 Q 1.655 1.387 1.494 1.422 Z M 11.88 8.244 Q 11.88 8.874 12.033 9.504 A 3.498 3.498 0 0 0 12.426 10.477 A 3.269 3.269 0 0 0 12.528 10.638 Q 12.87 11.142 13.419 11.448 A 2.314 2.314 0 0 0 14.071 11.687 Q 14.349 11.746 14.668 11.753 A 3.99 3.99 0 0 0 14.76 11.754 A 3.696 3.696 0 0 0 15.619 11.66 Q 16.283 11.502 16.733 11.075 A 2.301 2.301 0 0 0 16.929 10.863 A 2.863 2.863 0 0 0 17.421 9.943 Q 17.558 9.53 17.616 9.027 A 6.871 6.871 0 0 0 17.658 8.244 Q 17.658 7.596 17.505 6.975 Q 17.352 6.354 17.001 5.85 Q 16.65 5.346 16.101 5.04 A 2.314 2.314 0 0 0 15.449 4.801 Q 15.171 4.742 14.852 4.735 A 3.99 3.99 0 0 0 14.76 4.734 A 3.73 3.73 0 0 0 13.911 4.825 Q 13.089 5.017 12.6 5.616 A 2.807 2.807 0 0 0 12.124 6.504 Q 11.88 7.228 11.88 8.244 Z",
  [SolfegeName.Re]: "M 0 12.744 L 0 0.27 A 12.756 12.756 0 0 1 0.638 0.17 Q 0.965 0.127 1.328 0.093 A 21.604 21.604 0 0 1 1.575 0.072 Q 2.466 0 3.204 0 A 6.844 6.844 0 0 1 4.496 0.119 A 6.176 6.176 0 0 1 4.779 0.18 A 3.836 3.836 0 0 1 5.682 0.517 A 3.389 3.389 0 0 1 6.093 0.774 Q 6.66 1.188 7.002 1.854 Q 7.344 2.52 7.344 3.474 A 3.815 3.815 0 0 1 7.287 4.149 A 2.893 2.893 0 0 1 7.101 4.779 Q 6.858 5.346 6.507 5.751 A 4.129 4.129 0 0 1 6.126 6.138 A 3.217 3.217 0 0 1 5.778 6.408 A 5.752 5.752 0 0 1 5.552 6.551 Q 5.434 6.623 5.328 6.677 A 2.352 2.352 0 0 1 5.13 6.768 L 8.46 12.744 L 6.714 12.744 L 3.744 7.2 L 1.494 7.2 L 1.494 12.744 L 0 12.744 Z M 17.964 10.584 L 18.522 11.61 A 4.112 4.112 0 0 1 18.096 11.939 A 5.228 5.228 0 0 1 17.757 12.15 A 5.512 5.512 0 0 1 16.987 12.512 A 6.284 6.284 0 0 1 16.794 12.582 Q 16.272 12.762 15.705 12.861 Q 15.138 12.96 14.562 12.96 A 5.975 5.975 0 0 1 13.605 12.887 A 4.452 4.452 0 0 1 12.654 12.627 Q 11.826 12.294 11.268 11.673 A 4.061 4.061 0 0 1 10.524 10.465 A 4.796 4.796 0 0 1 10.422 10.188 A 5.522 5.522 0 0 1 10.182 9.088 A 7.188 7.188 0 0 1 10.134 8.244 A 6.974 6.974 0 0 1 10.208 7.205 A 5.205 5.205 0 0 1 10.449 6.228 Q 10.764 5.346 11.358 4.752 Q 11.952 4.158 12.798 3.843 Q 13.644 3.528 14.688 3.528 Q 15.444 3.528 16.182 3.726 Q 16.92 3.924 17.487 4.473 A 2.978 2.978 0 0 1 18.002 5.149 Q 18.212 5.519 18.36 5.985 Q 18.666 6.948 18.576 8.478 L 11.61 8.478 A 4.774 4.774 0 0 0 11.693 9.4 Q 11.879 10.345 12.483 10.899 A 2.955 2.955 0 0 0 13.861 11.601 A 4.34 4.34 0 0 0 14.814 11.7 Q 15.3 11.7 15.777 11.583 A 8.14 8.14 0 0 0 16.577 11.344 A 7.427 7.427 0 0 0 16.686 11.304 A 5.411 5.411 0 0 0 17.117 11.122 A 4.16 4.16 0 0 0 17.451 10.944 A 5.267 5.267 0 0 0 17.644 10.824 Q 17.839 10.696 17.962 10.586 A 1.512 1.512 0 0 0 17.964 10.584 Z M 1.494 1.404 L 1.494 6.048 L 2.898 6.048 A 4.141 4.141 0 0 0 3.819 5.951 A 2.931 2.931 0 0 0 4.95 5.436 A 1.949 1.949 0 0 0 5.664 4.338 Q 5.751 4.008 5.759 3.611 A 4.043 4.043 0 0 0 5.76 3.528 A 2.317 2.317 0 0 0 5.618 2.705 A 2.066 2.066 0 0 0 5.094 1.926 A 2.193 2.193 0 0 0 4.149 1.408 Q 3.818 1.317 3.425 1.3 A 4.254 4.254 0 0 0 3.24 1.296 L 2.754 1.296 A 6.436 6.436 0 0 0 2.334 1.309 A 5.785 5.785 0 0 0 2.268 1.314 Q 2.034 1.332 1.827 1.35 Q 1.62 1.368 1.494 1.404 Z M 11.664 7.218 L 17.262 7.218 Q 17.172 6.03 16.497 5.373 A 2.279 2.279 0 0 0 15.247 4.757 A 3.198 3.198 0 0 0 14.724 4.716 Q 14.13 4.716 13.599 4.842 A 2.67 2.67 0 0 0 12.928 5.096 A 2.394 2.394 0 0 0 12.663 5.265 A 2.288 2.288 0 0 0 12.067 5.919 A 2.696 2.696 0 0 0 11.997 6.039 A 2.538 2.538 0 0 0 11.788 6.554 Q 11.718 6.799 11.68 7.084 A 4.527 4.527 0 0 0 11.664 7.218 Z",
  [SolfegeName.Mi]: "M 7.146 12.744 L 7.146 4.374 L 7.326 2.664 L 7.236 2.664 L 6.372 4.212 L 4.536 7.29 L 4.086 7.29 L 2.16 4.194 L 1.332 2.664 L 1.242 2.664 L 1.458 4.356 L 1.458 12.744 L 0 12.744 L 0 0.144 L 1.386 0.144 L 4.374 4.932 L 4.41 4.932 L 7.29 0.144 L 8.64 0.144 L 8.64 12.744 L 7.146 12.744 Z M 19.242 12.744 L 11.61 12.744 L 11.61 11.538 L 14.742 11.538 L 14.742 4.95 L 11.61 4.95 L 11.61 3.744 L 16.182 3.744 L 16.182 11.538 L 19.242 11.538 L 19.242 12.744 Z M 14.58 0.351 A 1.192 1.192 0 0 0 14.256 1.188 A 1.341 1.341 0 0 0 14.256 1.203 A 1.075 1.075 0 0 0 14.58 1.98 A 1.066 1.066 0 0 0 15.005 2.243 A 1.281 1.281 0 0 0 15.408 2.304 A 1.596 1.596 0 0 0 15.52 2.3 A 1.213 1.213 0 0 0 16.281 1.98 Q 16.632 1.656 16.632 1.188 A 1.171 1.171 0 0 0 16.565 0.789 A 1.182 1.182 0 0 0 16.281 0.351 A 1.171 1.171 0 0 0 15.88 0.085 A 1.276 1.276 0 0 0 15.408 0 A 1.412 1.412 0 0 0 15.361 0.001 A 1.069 1.069 0 0 0 14.58 0.351 Z",
  [SolfegeName.Fa]: "M 0 12.6 L 0 0 L 7.218 0 L 7.218 1.332 L 1.494 1.332 L 1.494 5.634 L 6.858 5.634 L 6.858 6.966 L 1.494 6.966 L 1.494 12.6 L 0 12.6 Z M 11.088 5.346 L 10.638 4.302 A 5.496 5.496 0 0 1 11.91 3.769 A 6.519 6.519 0 0 1 12.384 3.654 A 9.594 9.594 0 0 1 14.175 3.457 A 8.885 8.885 0 0 1 14.292 3.456 A 4.807 4.807 0 0 1 14.909 3.493 Q 15.22 3.534 15.481 3.618 A 2.333 2.333 0 0 1 15.795 3.744 Q 16.38 4.032 16.713 4.491 Q 17.046 4.95 17.163 5.535 Q 17.28 6.12 17.28 6.714 A 29.333 29.333 0 0 1 17.266 7.604 A 35.327 35.327 0 0 1 17.244 8.172 Q 17.208 8.946 17.19 9.72 Q 17.19 10.62 17.298 11.43 L 18.504 11.43 L 18.504 12.6 L 16.11 12.6 L 15.948 11.25 L 15.858 11.25 A 2.581 2.581 0 0 1 15.78 11.36 Q 15.683 11.491 15.534 11.664 A 2.422 2.422 0 0 1 15.302 11.898 Q 15.177 12.009 15.024 12.119 A 4.194 4.194 0 0 1 14.967 12.159 Q 14.638 12.387 14.174 12.559 A 5.062 5.062 0 0 1 14.112 12.582 A 2.932 2.932 0 0 1 13.572 12.716 Q 13.311 12.756 13.015 12.761 A 5.062 5.062 0 0 1 12.924 12.762 Q 11.592 12.762 10.818 12.078 A 2.246 2.246 0 0 1 10.076 10.668 A 3.221 3.221 0 0 1 10.044 10.206 A 3.437 3.437 0 0 1 10.108 9.523 Q 10.205 9.044 10.449 8.676 A 2.454 2.454 0 0 1 11.307 7.89 A 3.11 3.11 0 0 1 11.61 7.74 Q 12.288 7.45 13.218 7.376 A 7.711 7.711 0 0 1 13.437 7.362 Q 14.127 7.327 14.925 7.397 A 15.279 15.279 0 0 1 15.84 7.506 Q 15.93 6.678 15.867 6.129 A 2.702 2.702 0 0 0 15.805 5.778 Q 15.727 5.469 15.579 5.256 A 1.187 1.187 0 0 0 15.026 4.825 A 1.487 1.487 0 0 0 14.949 4.797 A 2.37 2.37 0 0 0 14.589 4.71 Q 14.303 4.662 13.95 4.662 Q 13.14 4.662 12.402 4.887 Q 11.664 5.112 11.088 5.346 Z M 15.84 9.864 L 15.84 8.604 A 11.575 11.575 0 0 0 14.886 8.478 A 8.805 8.805 0 0 0 14.112 8.442 A 6.202 6.202 0 0 0 13.504 8.47 Q 13.086 8.511 12.744 8.613 A 2.378 2.378 0 0 0 12.318 8.783 Q 12.036 8.93 11.844 9.144 A 1.238 1.238 0 0 0 11.549 9.757 A 1.748 1.748 0 0 0 11.52 10.08 Q 11.52 10.674 11.925 11.115 Q 12.33 11.556 13.284 11.556 A 2.76 2.76 0 0 0 13.943 11.479 A 2.447 2.447 0 0 0 14.22 11.394 A 3.054 3.054 0 0 0 14.718 11.156 A 2.572 2.572 0 0 0 14.976 10.98 A 2.913 2.913 0 0 0 15.351 10.634 A 2.476 2.476 0 0 0 15.516 10.431 A 3.237 3.237 0 0 0 15.684 10.176 Q 15.767 10.037 15.823 9.904 A 1.922 1.922 0 0 0 15.84 9.864 Z",
  [SolfegeName.Sol]: "M 1.35 9.036 L 1.35 11.034 A 5.588 5.588 0 0 0 2.078 11.355 A 6.873 6.873 0 0 0 2.565 11.511 Q 3.24 11.7 3.924 11.7 A 5.354 5.354 0 0 0 4.706 11.645 A 4.592 4.592 0 0 0 5.04 11.583 Q 5.562 11.466 5.949 11.205 Q 6.336 10.944 6.561 10.548 A 1.698 1.698 0 0 0 6.757 9.982 A 2.26 2.26 0 0 0 6.786 9.612 A 1.793 1.793 0 0 0 6.693 9.023 A 1.525 1.525 0 0 0 6.291 8.406 A 4.349 4.349 0 0 0 5.657 7.914 A 5.788 5.788 0 0 0 5.058 7.578 A 21.262 21.262 0 0 0 4.086 7.135 A 25.578 25.578 0 0 0 3.456 6.876 A 9.617 9.617 0 0 1 1.993 6.153 A 8.84 8.84 0 0 1 1.854 6.066 Q 1.116 5.598 0.621 4.923 A 2.472 2.472 0 0 1 0.208 3.991 Q 0.131 3.651 0.126 3.257 A 4.344 4.344 0 0 1 0.126 3.204 A 3.158 3.158 0 0 1 0.228 2.389 A 2.712 2.712 0 0 1 0.423 1.872 Q 0.72 1.278 1.26 0.864 A 3.617 3.617 0 0 1 2.023 0.42 A 4.649 4.649 0 0 1 2.565 0.225 Q 3.33 0 4.266 0 A 13.27 13.27 0 0 1 5.296 0.038 A 10.006 10.006 0 0 1 6.228 0.153 A 8.401 8.401 0 0 1 6.744 0.258 Q 7.009 0.322 7.231 0.396 A 3.499 3.499 0 0 1 7.632 0.558 L 7.668 0.54 L 7.668 0.576 L 7.686 0.576 L 7.668 0.63 L 7.668 3.51 L 6.336 3.51 L 6.336 1.584 Q 5.886 1.476 5.346 1.404 Q 4.806 1.332 4.194 1.332 A 4.221 4.221 0 0 0 3.613 1.37 A 3.234 3.234 0 0 0 3.123 1.476 Q 2.646 1.62 2.313 1.863 A 1.891 1.891 0 0 0 1.972 2.18 A 1.622 1.622 0 0 0 1.8 2.43 Q 1.62 2.754 1.62 3.114 Q 1.62 3.816 2.115 4.284 Q 2.61 4.752 3.348 5.121 A 23.876 23.876 0 0 0 4.32 5.579 A 28.822 28.822 0 0 0 4.95 5.85 A 10.216 10.216 0 0 1 6.366 6.57 A 9.353 9.353 0 0 1 6.552 6.687 Q 7.29 7.164 7.785 7.83 A 2.463 2.463 0 0 1 8.225 8.864 A 3.393 3.393 0 0 1 8.28 9.486 A 3.798 3.798 0 0 1 8.189 10.335 A 3.137 3.137 0 0 1 7.983 10.944 Q 7.686 11.592 7.137 12.06 A 3.517 3.517 0 0 1 6.33 12.571 A 4.493 4.493 0 0 1 5.787 12.78 A 5.339 5.339 0 0 1 4.82 12.984 A 7.063 7.063 0 0 1 3.978 13.032 A 7.763 7.763 0 0 1 3.032 12.976 A 6.739 6.739 0 0 1 2.682 12.924 A 9.663 9.663 0 0 1 1.99 12.777 A 7.778 7.778 0 0 1 1.557 12.654 Q 1.044 12.492 0.639 12.312 A 16.727 16.727 0 0 1 0.447 12.225 Q 0.176 12.101 0 12.006 L 0.018 11.952 L 0.018 9.036 L 1.35 9.036 Z M 21.51 1.422 L 21.51 0.216 L 24.498 0.216 L 24.498 9.792 A 5.204 5.204 0 0 0 24.521 10.301 Q 24.59 11.003 24.867 11.34 A 1.187 1.187 0 0 0 25.54 11.746 A 1.851 1.851 0 0 0 25.956 11.79 A 2.775 2.775 0 0 0 26.738 11.674 A 3.308 3.308 0 0 0 26.982 11.592 Q 27.504 11.394 27.936 11.034 L 28.584 11.988 Q 28.296 12.24 27.954 12.438 Q 27.612 12.636 27.252 12.771 Q 26.892 12.906 26.532 12.978 Q 26.172 13.05 25.866 13.05 A 4.435 4.435 0 0 1 25.245 13.009 A 3.308 3.308 0 0 1 24.678 12.879 A 2.086 2.086 0 0 1 24.016 12.526 A 1.961 1.961 0 0 1 23.805 12.33 Q 23.467 11.966 23.287 11.376 A 3.55 3.55 0 0 1 23.274 11.331 Q 23.134 10.849 23.103 10.187 A 8.39 8.39 0 0 1 23.094 9.792 L 23.094 1.422 L 21.51 1.422 Z M 10.616 6.897 A 6.765 6.765 0 0 0 10.476 8.316 A 7.212 7.212 0 0 0 10.488 8.743 A 6.185 6.185 0 0 0 10.737 10.17 A 4.695 4.695 0 0 0 10.825 10.434 A 3.986 3.986 0 0 0 11.538 11.664 A 3.562 3.562 0 0 0 11.953 12.075 A 4.011 4.011 0 0 0 12.906 12.663 A 4.12 4.12 0 0 0 13.898 12.956 A 5.694 5.694 0 0 0 14.85 13.032 Q 15.894 13.032 16.713 12.699 Q 17.532 12.366 18.09 11.754 A 3.733 3.733 0 0 0 18.485 11.236 A 4.334 4.334 0 0 0 18.936 10.269 A 5.478 5.478 0 0 0 19.143 9.405 A 6.989 6.989 0 0 0 19.224 8.316 A 7.212 7.212 0 0 0 19.212 7.889 A 6.185 6.185 0 0 0 18.963 6.462 A 4.695 4.695 0 0 0 18.875 6.198 A 3.986 3.986 0 0 0 18.162 4.968 Q 17.622 4.338 16.803 3.969 Q 16.336 3.759 15.766 3.668 A 5.847 5.847 0 0 0 14.85 3.6 A 5.626 5.626 0 0 0 13.573 3.737 A 3.676 3.676 0 0 0 11.61 4.869 A 3.979 3.979 0 0 0 11.289 5.279 Q 10.814 5.977 10.616 6.897 Z M 11.97 8.316 Q 11.97 8.946 12.123 9.576 A 3.498 3.498 0 0 0 12.516 10.549 A 3.269 3.269 0 0 0 12.618 10.71 Q 12.96 11.214 13.509 11.52 A 2.314 2.314 0 0 0 14.161 11.759 Q 14.439 11.818 14.758 11.825 A 3.99 3.99 0 0 0 14.85 11.826 A 3.696 3.696 0 0 0 15.709 11.732 Q 16.373 11.574 16.823 11.147 A 2.301 2.301 0 0 0 17.019 10.935 A 2.863 2.863 0 0 0 17.511 10.015 Q 17.648 9.602 17.706 9.099 A 6.871 6.871 0 0 0 17.748 8.316 Q 17.748 7.668 17.595 7.047 Q 17.442 6.426 17.091 5.922 Q 16.74 5.418 16.191 5.112 A 2.314 2.314 0 0 0 15.539 4.873 Q 15.261 4.814 14.942 4.807 A 3.99 3.99 0 0 0 14.85 4.806 A 3.73 3.73 0 0 0 14.001 4.897 Q 13.179 5.089 12.69 5.688 A 2.807 2.807 0 0 0 12.214 6.576 Q 11.97 7.3 11.97 8.316 Z",
  [SolfegeName.La]: "M 0 12.6 L 0 0 L 1.494 0 L 1.494 11.268 L 6.588 11.268 L 6.588 8.136 L 7.92 8.136 L 7.92 12.6 L 0 12.6 Z M 11.574 5.346 L 11.124 4.302 A 5.496 5.496 0 0 1 12.396 3.769 A 6.519 6.519 0 0 1 12.87 3.654 A 9.594 9.594 0 0 1 14.661 3.457 A 8.885 8.885 0 0 1 14.778 3.456 A 4.807 4.807 0 0 1 15.395 3.493 Q 15.706 3.534 15.967 3.618 A 2.333 2.333 0 0 1 16.281 3.744 Q 16.866 4.032 17.199 4.491 Q 17.532 4.95 17.649 5.535 Q 17.766 6.12 17.766 6.714 A 29.333 29.333 0 0 1 17.752 7.604 A 35.327 35.327 0 0 1 17.73 8.172 Q 17.694 8.946 17.676 9.72 Q 17.676 10.62 17.784 11.43 L 18.99 11.43 L 18.99 12.6 L 16.596 12.6 L 16.434 11.25 L 16.344 11.25 A 2.581 2.581 0 0 1 16.266 11.36 Q 16.169 11.491 16.02 11.664 A 2.422 2.422 0 0 1 15.788 11.898 Q 15.663 12.009 15.51 12.119 A 4.194 4.194 0 0 1 15.453 12.159 Q 15.124 12.387 14.66 12.559 A 5.062 5.062 0 0 1 14.598 12.582 A 2.932 2.932 0 0 1 14.058 12.716 Q 13.797 12.756 13.501 12.761 A 5.062 5.062 0 0 1 13.41 12.762 Q 12.078 12.762 11.304 12.078 A 2.246 2.246 0 0 1 10.562 10.668 A 3.221 3.221 0 0 1 10.53 10.206 A 3.437 3.437 0 0 1 10.594 9.523 Q 10.691 9.044 10.935 8.676 A 2.454 2.454 0 0 1 11.793 7.89 A 3.11 3.11 0 0 1 12.096 7.74 Q 12.774 7.45 13.704 7.376 A 7.711 7.711 0 0 1 13.923 7.362 Q 14.613 7.327 15.411 7.397 A 15.279 15.279 0 0 1 16.326 7.506 Q 16.416 6.678 16.353 6.129 A 2.702 2.702 0 0 0 16.291 5.778 Q 16.213 5.469 16.065 5.256 A 1.187 1.187 0 0 0 15.512 4.825 A 1.487 1.487 0 0 0 15.435 4.797 A 2.37 2.37 0 0 0 15.075 4.71 Q 14.789 4.662 14.436 4.662 Q 13.626 4.662 12.888 4.887 Q 12.15 5.112 11.574 5.346 Z M 16.326 9.864 L 16.326 8.604 A 11.575 11.575 0 0 0 15.372 8.478 A 8.805 8.805 0 0 0 14.598 8.442 A 6.202 6.202 0 0 0 13.99 8.47 Q 13.572 8.511 13.23 8.613 A 2.378 2.378 0 0 0 12.804 8.783 Q 12.522 8.93 12.33 9.144 A 1.238 1.238 0 0 0 12.035 9.757 A 1.748 1.748 0 0 0 12.006 10.08 Q 12.006 10.674 12.411 11.115 Q 12.816 11.556 13.77 11.556 A 2.76 2.76 0 0 0 14.429 11.479 A 2.447 2.447 0 0 0 14.706 11.394 A 3.054 3.054 0 0 0 15.204 11.156 A 2.572 2.572 0 0 0 15.462 10.98 A 2.913 2.913 0 0 0 15.837 10.634 A 2.476 2.476 0 0 0 16.002 10.431 A 3.237 3.237 0 0 0 16.17 10.176 Q 16.253 10.037 16.309 9.904 A 1.922 1.922 0 0 0 16.326 9.864 Z",
  [SolfegeName.Ti]: "M 0 3.438 L 0 0.144 L 9.36 0.144 L 9.36 3.438 L 8.028 3.438 L 8.028 1.476 L 5.418 1.476 L 5.418 11.412 L 7.398 11.412 L 7.398 12.744 L 1.944 12.744 L 1.944 11.412 L 3.924 11.412 L 3.924 1.476 L 1.332 1.476 L 1.332 3.438 L 0 3.438 Z M 19.602 12.744 L 11.97 12.744 L 11.97 11.538 L 15.102 11.538 L 15.102 4.95 L 11.97 4.95 L 11.97 3.744 L 16.542 3.744 L 16.542 11.538 L 19.602 11.538 L 19.602 12.744 Z M 14.94 0.351 A 1.192 1.192 0 0 0 14.616 1.188 A 1.341 1.341 0 0 0 14.616 1.203 A 1.075 1.075 0 0 0 14.94 1.98 A 1.066 1.066 0 0 0 15.365 2.243 A 1.281 1.281 0 0 0 15.768 2.304 A 1.596 1.596 0 0 0 15.88 2.3 A 1.213 1.213 0 0 0 16.641 1.98 Q 16.992 1.656 16.992 1.188 A 1.171 1.171 0 0 0 16.925 0.789 A 1.182 1.182 0 0 0 16.641 0.351 A 1.171 1.171 0 0 0 16.24 0.085 A 1.276 1.276 0 0 0 15.768 0 A 1.412 1.412 0 0 0 15.721 0.001 A 1.069 1.069 0 0 0 14.94 0.351 Z",
}

export const DRAWING_BY_NOTE_NAME = {
  [NoteName.B]: "M 5.22 5.994 L 5.22 6.066 Q 5.76 6.156 6.255 6.372 Q 6.75 6.588 7.128 6.966 A 2.832 2.832 0 0 1 7.631 7.656 A 3.356 3.356 0 0 1 7.74 7.884 A 2.725 2.725 0 0 1 7.922 8.509 Q 7.974 8.813 7.974 9.162 A 3.921 3.921 0 0 1 7.888 10.003 A 2.979 2.979 0 0 1 7.569 10.845 Q 7.164 11.556 6.507 12.006 A 4.554 4.554 0 0 1 5.327 12.579 A 5.353 5.353 0 0 1 5.004 12.672 Q 4.158 12.888 3.276 12.888 L 2.556 12.888 A 13.989 13.989 0 0 1 1.915 12.873 A 15.886 15.886 0 0 1 1.692 12.861 Q 1.242 12.834 0.792 12.789 A 6.325 6.325 0 0 1 0.419 12.741 Q 0.192 12.705 0 12.654 L 0 0.252 Q 0.572 0.159 1.304 0.093 A 27.838 27.838 0 0 1 1.548 0.072 A 21.324 21.324 0 0 1 2.592 0.014 A 27.3 27.3 0 0 1 3.474 0 Q 4.176 0 4.905 0.117 Q 5.634 0.234 6.228 0.567 Q 6.822 0.9 7.209 1.494 Q 7.554 2.024 7.592 2.826 A 4.269 4.269 0 0 1 7.596 3.024 A 3.035 3.035 0 0 1 7.501 3.767 A 3.505 3.505 0 0 1 7.452 3.942 Q 7.308 4.41 7.02 4.815 A 2.803 2.803 0 0 1 6.446 5.407 A 3.292 3.292 0 0 1 6.282 5.526 A 3.155 3.155 0 0 1 5.656 5.852 A 4.002 4.002 0 0 1 5.22 5.994 Z M 3.06 6.948 L 1.494 6.948 L 1.494 11.466 Q 1.608 11.499 1.81 11.516 A 3.924 3.924 0 0 0 1.854 11.52 Q 2.088 11.538 2.358 11.556 Q 2.628 11.574 2.916 11.583 Q 3.114 11.589 3.278 11.591 A 12.069 12.069 0 0 0 3.42 11.592 Q 3.996 11.592 4.536 11.448 Q 5.076 11.304 5.49 11.016 Q 5.904 10.728 6.147 10.296 A 1.857 1.857 0 0 0 6.355 9.697 A 2.505 2.505 0 0 0 6.39 9.27 A 3.004 3.004 0 0 0 6.355 8.797 Q 6.313 8.535 6.221 8.321 A 1.528 1.528 0 0 0 6.093 8.082 Q 5.796 7.632 5.319 7.38 Q 4.842 7.128 4.248 7.038 Q 3.654 6.948 3.06 6.948 Z M 1.494 5.688 L 2.43 5.688 A 12.99 12.99 0 0 0 2.677 5.685 Q 2.788 5.683 2.91 5.679 A 25.485 25.485 0 0 0 3.168 5.67 Q 3.59 5.652 3.874 5.618 A 4.83 4.83 0 0 0 3.888 5.616 A 4.936 4.936 0 0 0 4.674 5.278 A 4.578 4.578 0 0 0 4.698 5.265 Q 5.076 5.058 5.373 4.77 Q 5.67 4.482 5.841 4.122 A 1.789 1.789 0 0 0 6.009 3.443 A 2.114 2.114 0 0 0 6.012 3.33 Q 6.012 2.835 5.856 2.477 A 1.469 1.469 0 0 0 5.787 2.34 Q 5.562 1.944 5.184 1.71 A 2.384 2.384 0 0 0 4.556 1.44 A 2.858 2.858 0 0 0 4.32 1.386 Q 3.834 1.296 3.33 1.296 Q 2.736 1.296 2.241 1.323 A 10.121 10.121 0 0 0 2.009 1.338 Q 1.683 1.364 1.494 1.404 L 1.494 5.688 Z",
  [NoteName.E]: "M 0 12.6 L 0 0 L 7.398 0 L 7.398 1.332 L 1.494 1.332 L 1.494 5.454 L 6.948 5.454 L 6.948 6.786 L 1.494 6.786 L 1.494 11.268 L 7.488 11.268 L 7.488 12.6 L 0 12.6 Z",
  [NoteName.A]: "M 8.658 12.6 L 7.47 9.108 L 2.628 9.108 L 1.476 12.6 L 0 12.6 L 4.212 0 L 5.976 0 L 10.224 12.6 L 8.658 12.6 Z M 4.986 1.89 L 3.096 7.812 L 7.056 7.812 L 5.202 1.89 L 4.986 1.89 Z",
  [NoteName.D]: "M 0 12.762 L 0 0.144 Q 0.684 0.054 1.431 0.027 A 49.713 49.713 0 0 1 1.96 0.011 Q 2.167 0.005 2.352 0.003 A 24.52 24.52 0 0 1 2.7 0 A 9.546 9.546 0 0 1 3.854 0.066 Q 4.444 0.138 4.945 0.289 A 4.937 4.937 0 0 1 5.445 0.468 Q 6.552 0.936 7.227 1.773 A 4.946 4.946 0 0 1 8.024 3.207 A 6.065 6.065 0 0 1 8.199 3.78 Q 8.496 4.95 8.496 6.354 A 11.001 11.001 0 0 1 8.243 8.737 A 10.275 10.275 0 0 1 8.226 8.811 Q 7.956 9.99 7.29 10.899 A 4.58 4.58 0 0 1 5.969 12.1 A 5.603 5.603 0 0 1 5.499 12.357 A 5.02 5.02 0 0 1 4.341 12.747 Q 3.804 12.861 3.182 12.893 A 9.664 9.664 0 0 1 2.682 12.906 A 15.181 15.181 0 0 1 2.556 12.905 Q 2.382 12.904 2.148 12.899 A 48.386 48.386 0 0 1 2.07 12.897 Q 1.692 12.888 1.296 12.861 Q 0.9 12.834 0.54 12.816 Q 0.246 12.801 0.072 12.775 A 1.63 1.63 0 0 1 0 12.762 Z M 1.494 1.422 L 1.494 11.502 A 0.971 0.971 0 0 0 1.555 11.512 Q 1.616 11.52 1.701 11.526 A 3.932 3.932 0 0 0 1.755 11.529 Q 1.926 11.538 2.106 11.547 Q 2.286 11.556 2.457 11.565 A 8.96 8.96 0 0 0 2.539 11.569 Q 2.639 11.573 2.713 11.574 A 2.841 2.841 0 0 0 2.736 11.574 A 6.575 6.575 0 0 0 3.581 11.523 Q 4.024 11.466 4.392 11.343 A 3.134 3.134 0 0 0 4.869 11.142 A 3.381 3.381 0 0 0 5.749 10.486 A 3.061 3.061 0 0 0 6.138 9.981 A 4.443 4.443 0 0 0 6.647 8.78 A 5.385 5.385 0 0 0 6.75 8.307 Q 6.912 7.362 6.912 6.354 Q 6.912 5.472 6.768 4.581 Q 6.624 3.69 6.183 2.97 Q 5.742 2.25 4.923 1.791 A 3.255 3.255 0 0 0 4.116 1.479 Q 3.748 1.387 3.315 1.353 A 6.835 6.835 0 0 0 2.772 1.332 Q 2.533 1.332 2.171 1.348 A 24.843 24.843 0 0 0 2.133 1.35 A 5.869 5.869 0 0 0 1.872 1.368 Q 1.655 1.387 1.494 1.422 Z",
  [NoteName.G]: "M 6.912 3.51 L 6.912 1.458 A 5.421 5.421 0 0 0 6.415 1.381 Q 5.969 1.332 5.418 1.332 Q 4.662 1.332 3.969 1.593 A 2.949 2.949 0 0 0 2.915 2.283 A 3.565 3.565 0 0 0 2.745 2.466 Q 2.214 3.078 1.899 4.068 Q 1.648 4.856 1.597 5.94 A 12.221 12.221 0 0 0 1.584 6.516 A 11.532 11.532 0 0 0 1.662 7.903 Q 1.844 9.402 2.454 10.288 A 3.208 3.208 0 0 0 2.565 10.44 A 3.186 3.186 0 0 0 4.683 11.648 A 4.752 4.752 0 0 0 5.4 11.7 Q 6.521 11.7 7.318 11.274 A 3.081 3.081 0 0 0 7.362 11.25 L 7.362 7.74 L 4.77 7.74 L 4.77 6.534 L 8.64 6.534 L 8.64 12.078 Q 8.357 12.291 7.96 12.468 A 4.876 4.876 0 0 1 7.947 12.474 A 6.016 6.016 0 0 1 7.201 12.747 A 6.725 6.725 0 0 1 7.083 12.78 Q 6.624 12.906 6.129 12.969 A 7.718 7.718 0 0 1 5.283 13.031 A 7.029 7.029 0 0 1 5.166 13.032 A 6.449 6.449 0 0 1 3.989 12.929 A 5.066 5.066 0 0 1 3.006 12.645 Q 2.052 12.258 1.386 11.457 A 4.851 4.851 0 0 1 0.749 10.452 A 6.716 6.716 0 0 1 0.36 9.423 Q 0.036 8.313 0.004 6.846 A 14.965 14.965 0 0 1 0 6.516 A 11.355 11.355 0 0 1 0.074 5.181 Q 0.183 4.265 0.45 3.528 A 6.916 6.916 0 0 1 0.917 2.497 A 5.029 5.029 0 0 1 1.638 1.503 A 4.519 4.519 0 0 1 3.095 0.457 A 4.369 4.369 0 0 1 3.33 0.36 Q 4.284 0 5.292 0 A 16.547 16.547 0 0 1 5.99 0.014 Q 6.302 0.027 6.573 0.053 A 7.225 7.225 0 0 1 7.074 0.117 Q 7.646 0.212 8.074 0.361 A 3.849 3.849 0 0 1 8.262 0.432 L 8.244 0.504 L 8.244 3.51 L 6.912 3.51 Z",
  [NoteName.C]: "M 7.074 3.51 L 7.074 1.584 A 2.983 2.983 0 0 0 6.634 1.443 A 3.606 3.606 0 0 0 6.399 1.395 Q 6.112 1.346 5.733 1.335 A 7.831 7.831 0 0 0 5.508 1.332 Q 4.77 1.332 4.059 1.602 Q 3.348 1.872 2.799 2.484 Q 2.25 3.096 1.917 4.086 A 5.805 5.805 0 0 0 1.695 5.001 Q 1.619 5.47 1.595 6.01 A 11.436 11.436 0 0 0 1.584 6.516 A 9.595 9.595 0 0 0 1.641 7.588 Q 1.714 8.237 1.881 8.784 A 5.518 5.518 0 0 0 2.211 9.624 A 4.094 4.094 0 0 0 2.709 10.404 Q 3.24 11.052 3.987 11.376 A 3.932 3.932 0 0 0 5.149 11.674 A 4.825 4.825 0 0 0 5.652 11.7 A 4.779 4.779 0 0 0 6.212 11.668 A 3.965 3.965 0 0 0 6.525 11.619 A 4.088 4.088 0 0 0 7.049 11.479 A 3.49 3.49 0 0 0 7.272 11.394 L 7.272 9.594 L 8.604 9.594 L 8.604 12.024 L 8.622 12.06 Q 8.126 12.441 7.386 12.707 A 6.726 6.726 0 0 1 7.254 12.753 A 4.897 4.897 0 0 1 6.461 12.944 Q 6.062 13.007 5.605 13.025 A 9.411 9.411 0 0 1 5.238 13.032 A 5.824 5.824 0 0 1 3.776 12.853 A 5.167 5.167 0 0 1 3.141 12.645 Q 2.178 12.258 1.476 11.466 A 4.811 4.811 0 0 1 0.786 10.435 A 6.576 6.576 0 0 1 0.387 9.441 Q 0.052 8.373 0.007 6.961 A 14.009 14.009 0 0 1 0 6.516 A 12.013 12.013 0 0 1 0.069 5.195 Q 0.14 4.553 0.285 4.001 A 6.334 6.334 0 0 1 0.432 3.519 A 6.599 6.599 0 0 1 0.903 2.464 A 4.882 4.882 0 0 1 1.602 1.503 Q 2.34 0.72 3.321 0.36 A 5.987 5.987 0 0 1 5.245 0.002 A 6.824 6.824 0 0 1 5.418 0 A 14.285 14.285 0 0 1 5.854 0.006 Q 6.199 0.017 6.48 0.045 Q 6.883 0.085 7.199 0.154 A 4.306 4.306 0 0 1 7.272 0.171 Q 7.614 0.252 7.875 0.378 Q 8.136 0.504 8.388 0.666 L 8.406 0.666 L 8.406 3.51 L 7.074 3.51 Z",
  [NoteName.F]: "M 0 12.6 L 0 0 L 7.218 0 L 7.218 1.332 L 1.494 1.332 L 1.494 5.634 L 6.858 5.634 L 6.858 6.966 L 1.494 6.966 L 1.494 12.6 L 0 12.6 Z",
};