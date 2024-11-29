const profile_info_block = document.querySelectorAll('.profile_info');
const git_info_block = document.querySelectorAll('.git_profile_card');
const blocksToSetHeight = document.querySelectorAll('.user_bio');

function setBlockHeights() {
  let profileHeight = 0;
  let gitHeight = 0;

  // Calculate maximum height for profile_info blocks
  profile_info_block.forEach(block => {
    const height = block.offsetHeight + parseFloat(getComputedStyle(block).marginTop) + parseFloat(getComputedStyle(block).marginBottom);
    if (height > profileHeight) {
      profileHeight = height;
    }
  });

  // Calculate maximum height for git_profile_card blocks
  git_info_block.forEach(block => {
    const height = block.offsetHeight + parseFloat(getComputedStyle(block).marginTop) + parseFloat(getComputedStyle(block).marginBottom);
    if (height > gitHeight) {
      gitHeight = height;
    }
  });

  // Set mainHeight to the maximum of both heights
  const mainHeight = profileHeight-gitHeight;

  // Apply the calculated height to user_bio blocks
  blocksToSetHeight.forEach(block => {
    block.style.height = profileHeight + 'px';
  });

  console.debug("GIT: ", gitHeight, "PROFILE: ", profileHeight, "MAIN: ", mainHeight);
}

// Initial call to set heights
setBlockHeights();

// Debounce function for resize event
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(setBlockHeights, 100); // Adjust timeout as needed
});
