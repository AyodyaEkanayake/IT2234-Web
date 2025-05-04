# MongoDB Degrees Collection Tutorial

# Create new collection called "Degrees" in unidb database

![Screenshot 2025-05-03 234417](https://github.com/user-attachments/assets/b30ca0a4-c9af-464b-abcb-df1a1f16cc32)

#  1.Insert multiple degree records

db.degrees.insertMany([
  {
    "name": "BIT",
    "duration": 3
  },
  {
    "name": "Bsc in Applied Mathematics",
    "duration": 3
  },
  {
    "name": "Bsc in Environmental Science",
    "duration": 4
  },
  {
    "name": "Bsc in Computer Science",
    "duration": 4
  }
])

![Screenshot 2025-05-04 131650](https://github.com/user-attachments/assets/4116121d-a7a3-4aa3-8590-4245bf29a597)

![Screenshot 2025-05-04 131901](https://github.com/user-attachments/assets/e9dab661-ea3d-4e43-b0ea-85cb4400786a)



# 2.Delete a single degree

db.degrees.deleteOne({ _id: ObjectId('68171b1e1981ed2add5c9059') })

![Screenshot 2025-05-04 131929](https://github.com/user-attachments/assets/f86ccd65-8929-4190-b1ab-7a0fb96d8887)

![Screenshot 2025-05-04 131952](https://github.com/user-attachments/assets/9cb1e6cb-5808-4710-af90-731d04b8fafb)


# 3. Use Projection to View Specific Fields

db.degrees.find().projection(['name', 'duration'])

![Screenshot 2025-05-04 132034](https://github.com/user-attachments/assets/14ffe126-00ce-4b7b-a3a1-6a79ef7f21f1)



# 4. Display Results Nicely (Pretty)
>Displays only the name field neatly without showing the _id.

db.degrees.find({}, { name: 1, _id: 0 }).pretty()

![Screenshot 2025-05-04 132137](https://github.com/user-attachments/assets/a9cccc66-3f76-4fba-9d96-b26816acaa74)



# 5. Delete Multiple Degrees
>Deletes all degrees with a duration less than 4 years.

db.degrees.deleteMany({ duration: { $lt: 4 } })

![Screenshot 2025-05-04 132216](https://github.com/user-attachments/assets/5e9a3eff-5790-441f-9bea-049984b8e104)

![Screenshot 2025-05-04 132235](https://github.com/user-attachments/assets/b5f41a51-5b2e-42b4-85c6-e435dec8cb78)



# 6. Update One Degree Record
>Updates the name and duration of a single degree record.

db.degrees.updateOne(
  { _id: ObjectId('68171b1e1981ed2add5c905b') },
  { $set: { name: 'Bachelor in IT', duration: 3 } }
)

![Screenshot 2025-05-04 132540](https://github.com/user-attachments/assets/a6408079-a4f3-4a9d-85bd-4f8fc4138ada)

![Screenshot 2025-05-04 132600](https://github.com/user-attachments/assets/db69d695-106b-43f3-9f54-8625aaa8d96a)



# 7. Update Skills Array in Students Collection
> Adds PHP to the skills array of the specified student.

db.students.updateOne(
  { regNo : '2021ICT01' },
  { $push: { skills: 'PHP' } }
)

![Screenshot 2025-05-04 133214](https://github.com/user-attachments/assets/7cce7caf-df57-4055-9caf-79d0313580c3)

![Screenshot 2025-05-04 133252](https://github.com/user-attachments/assets/2fb1dab7-15b5-4020-b89a-f5e9afda631d)



# 8. Update Many Degrees
>Increments duration by 1 year for all degrees that were originally 4 years or more.

db.degrees.updateMany(
  { duration: { $gte: 4 } },
  { $inc: { duration: 1 } }
)
![Screenshot 2025-05-04 133350](https://github.com/user-attachments/assets/cb6da87a-0105-4d0c-9c06-b52c3b5a1200)

![Screenshot 2025-05-04 133409](https://github.com/user-attachments/assets/6613608a-7814-494c-9dbf-5510656602e7)


