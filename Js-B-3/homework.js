const students = [
  {
    name: 'Sophia',
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },
  {
    name: 'Mason',
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },
  {
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },
  {
    name: 'Liam',
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },
  {
    name: 'Olivia',
    attendance: [true, true, false, false, false],
    testScores: [72, 70, 69, 77, 60]
  }
]
// function getAttendanceRate(student) {
//   student.forEach((student) => {
//     const totalDays = student.attendance.length
//     const presentDays = student.attendance.filter((day) => day === true).length
//     const attendancePercentage = (presentDays / totalDays) * 100
//     console.log('AddendanceRate = ' + attendancePercentage)
//     return attendancePercentage
//   })
// }
// function getAvgScore(student) {
//   student.forEach((student) => {
//     const countScores = student.testScores.length
//     const sumScores = student.testScores.reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     )
//     const AvgScore = sumScores / countScores
//     console.log('AvgScore = ' + AvgScore)
//     return AvgScore
//   })
// }

// function underPerformStudents(students) {
//   students.forEach((student) => {
//     const totalDays = student.attendance.length
//     const presentDays = student.attendance.filter((day) => day === true).length
//     const countScores = student.testScores.length
//     const sumScores = student.testScores.reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     )
//     const attendancePercentage = (presentDays / totalDays) * 100
//     const AvgScore = sumScores / countScores
//     if (attendancePercentage < 80 && AvgScore < 70) {
//       Stringformat = `Name: ${student.name} AttendaceRate: ${attendancePercentage} AvgScore: ${AvgScore}`
//       console.log({ Stringformat })
//     }
//   })
// }

// getAttendanceRate(students)
// getAvgScore(students)
// underPerformStudents(students)

function getAttendanceRate(student) {
  const totalDays = student.attendance.length
  const presentDays = student.attendance.filter((day) => day).length
  return (presentDays / totalDays) * 100
}

function getAvgScore(student) {
  const countScores = student.testScores.length
  const sumScores = student.testScores.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
  return sumScores / countScores
}

function underPerformStudents(students) {
  const underPerformingStudents = students.filter((student) => {
    const attendanceRate = getAttendanceRate(student)
    const avgScore = getAvgScore(student)
    return attendanceRate < 80 && avgScore < 70
  })

  underPerformingStudents.forEach((student) => {
    console.log(
      `Name: ${student.name} Attendance Rate: ${getAttendanceRate(
        student
      )} Avg Score: ${getAvgScore(student)}`
    )
  })
}

underPerformStudents(students)
