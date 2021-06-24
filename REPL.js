const mongoose = require('mongoose');
const db = require('./models');

// db.Mark.find({ regno: 1712218 })
//     .then(x => console.log(x))


// $.ajax({
//     url: `/api/marks/`
// })
//     .then(h => {

// let tr;
// let z = 0;
// for (let i = 1; i <= s.length; ++i) {
//     tr = `
//             <tr>
//             <td>${i}</td>
//             <td>${s[i - 1].regno}</td>
//             <td><a href="#" class="std" regno="${s[i - 1].regno}">${s[i - 1].name}</a></td>
//         `
//     for (let j = z; j < 8; ++j) {
//         tr = tr + `
//             <td>${h[j].marks}</td>
//             `
//     }
//     tr = tr + `</tr>`;
//     $('#data>table>tbody').append(tr);
// }
// z += 8;


// db.Student.aggregate([
//     {
//         $lookup: {
//             from: 'marks',
//             localField: 'regno',
//             foreignField: 'regno',
//             as: 'score'
//         }
//     }
// ])
// .then(students => {
//     console.log(students);
//     process.exit();
// })

// db.Grade.find()
// .then(x => console.log(x))

// db.Mark.find({regno: '1712239'}).sort({hid: 1})
// .then(g => console.log(g))


db.Mark.updateOne(
    {regno: '1712224', hid: 2},
    {marks: 5}
)
.then(console.log("success"))