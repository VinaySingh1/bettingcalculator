## Synopsis

a program to calculate the dividends for a simplified form of Tote betting .

## Installation

1. Clone this repository.
2. Run `npm install `.
4. Define commission value in .env environment file
3. Start the server: `npm start`
5. Then start entering betting input of format `Bet:<product>:<selections>:<stake>` where
	- <product> is one of W , P,E
	- <selection> is either a single runner number (e.g.4 ) for Win and Place, or two runner numbers (e.g.4,3 ) for Exacta and Quinella
	- <stake> is an amount in whole dollars (e.g.35 )For example:
	Bet:W:3:5 is a $5 bet on horse 3 to win 
	Bet:P:2:10 is a $10 bet on horse 2 to come first, second or third 
	Bet:E:5,7:15 is a $15 bet on horses 5 and 7 to come first and second in that order
6. It will keep accepting input bets till result is not provided in format `Result:<first>:<second>:<third>`
For example,
Result:5:3:8 represents a race where horse 5 finished first, horse 3 finished second and horse 8 finished third.

## Details
Tote betting involves punters choosing the outcome of a race by placing bets into a pool of money. Punters
who successfully predict the outcome of a race take a share of the pool proportional to their stake. For
example, a punter who places a $2 bet on a winning selection would receive twice the winnings of a punter
who placed a $1 stake. Deduct a commission out of the pool before it is split between winning punters.

The calculator must support three products with the following rules:
### WIN
 - Punters must choose the winner of a race
 - Deduct 15% commission from the Win pool
 - The remaining total is split, proportionally to stake, amongst punters who chose the correct winning horse.
### PLACE
 - Punters must choose the first, second or third place horse in a race
 - Deduct 12% commission from the Place pool
 - The total pool is split evenly into 3 and each of these amounts is then split, proportionally to stake,
    amongst the punters who chose each placed horse
### EXACTA
 - Punters must choose the first and second place runners in a race in the correct order
 - Deduct 18% commission from the Exacta pool
 - The remaining total is split, proportionally to stake, amongst punters who chose the correct first and
   second horse in correct order

## Example
Here is sample data for a given race. This is what your program will receive on stdin :
Bet:W:1:3 \n
Bet:W:2:4
Bet:W:3:5
Bet:W:4:5
Bet:W:1:16
Bet:W:2:8
Bet:W:3:22
Bet:W:4:57
Bet:W:1:42
Bet:W:2:98
Bet:W:3:63
Bet:W:4:15
Bet:P:1:31
Bet:P:2:89
Bet:P:3:28
Bet:P:4:72
Bet:P:1:40
Bet:P:2:16
Bet:P:3:82
Bet:P:4:52
Bet:P:1:18
Bet:P:2:74
Bet:P:3:39
Bet:P:4:105
Bet:E:1,2:13
Bet:E:2,3:98
Bet:E:1,3:82
Bet:E:3,2:27
Bet:E:1,2:5
Bet:E:2,3:61
Bet:E:1,3:28
Bet:E:3,2:25
Bet:E:1,2:81
Bet:E:2,3:47
Bet:E:1,3:93
Bet:E:3,2:51
Result:2:3:1
And this is what it should output on stdout :
Win:2:$2.61
Place:2:$1.06
Place:3:$1.27
Place:1:$2.13
Exacta:2,3:$2.43
