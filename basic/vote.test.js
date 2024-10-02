const isEligibleToVote = require('./vote')

describe('isEligibleToVote', () => {
  it('returns "You are eligible to vote." when age is 18 or older', () => {
    expect(isEligibleToVote(18)).toBe('You are eligible to vote.');
    expect(isEligibleToVote(25)).toBe('You are eligible to vote.');
    expect(isEligibleToVote(65)).toBe('You are eligible to vote.');
  });

  it('returns "You are not eligible to vote." when age is under 18', () => {
    expect(isEligibleToVote(17)).toBe('You are not eligible to vote.');
    expect(isEligibleToVote(15)).toBe('You are not eligible to vote.');
    expect(isEligibleToVote(0)).toBe('You are not eligible to vote.');
  });
});