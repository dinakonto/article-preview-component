/* QUESTIONS / TODO :
 * 1. How can I make sure shareOptions stays fully visible
 * even when the viewport is a bit small (e.g. 880px)?
 * Want to stick to the right until screen is wide enough,
 * AND for the arrow to always be above the btn regardless.
 *
 * 2. Click outside share box to hide
 *
 * 3. Animate shareOptions backgroundColor/appearance
 */

const shareBtn = $(".share-btn")
const shareOptions = $(".share-options");

shareBtn.click(function() {
  shareOptions.toggleClass("hide");
})
