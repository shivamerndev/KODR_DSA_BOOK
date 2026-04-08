// Q92 Minimum Number of Seat Everyone

// seats = [3,1,5]
// students = [2,7,4]

// Sort both arrays:

// seats → [1,3,5]
// students → [2,4,7]

// Moves:
// |1-2| = 1
// |3-4| = 1
// |5-7| = 2
// Total = 4

function minMovesToSeat(seats, students) {

    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    let moves = 0;

    for (let i = 0; i < seats.length; i++) {
        moves += Math.abs(seats[i] - students[i]);
    }
    return moves;
}

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])) // 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])) // 7