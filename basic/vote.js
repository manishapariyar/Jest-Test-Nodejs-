function isEligibleToVote(age) {
  if (age >= 18) {
      return "You are eligible to vote.";
  } else {
      return "You are not eligible to vote.";
  }
}

module.exports = isEligibleToVote;