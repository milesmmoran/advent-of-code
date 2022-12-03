# First Pass
The hiccups I encountered with day 3:
Part 1
- Splitting the line into two groups. I wasn't sure how to do the indexing, so my first few attempst left me with two groups, but with the first or the second missing a letter.

- The value of capital letters was something I missed when reading. I assumed they were worth as much as lowercase. I had originally written the code
 so that the point of a letter was findIndex() of uppercase + findIndex of lowercase. Because of 0 indexing, I had to add a 1, and then realized I was still 1 short. I completely forgot that findIndex returns -1. 

- Not realizing that only unique letters could add to the score. 

Part 2 
Part 2 was straightforward after wrapping your head around part 1. 
The only real issue was I originally looped through the lines with a forEach, and continued to add points for the same letter instead of breakign after encountering the first letter in all three arrays.

forEach doesn't allow breaks, so I had to switch for a traditional loop.



