module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Institutes', [
      { name: 'Playhouse', type: 'playhouse', createdAt: new Date(), updatedAt: new Date() },
      { name: 'School', type: 'school', createdAt: new Date(), updatedAt: new Date() },
      { name: 'College', type: 'college', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Competitive Exam Center', type: 'exam_center', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('Boards', [
      { name: 'CBSE', createdAt: new Date(), updatedAt: new Date() },
      { name: 'GSEB', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('ClassCategories', [
      { name: 'Pre-primary', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Primary', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Secondary', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Higher Secondary', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('Standards', [
      { name: '1th', createdAt: new Date(), updatedAt: new Date() },
      { name: '2th', createdAt: new Date(), updatedAt: new Date() },
      { name: '3th', createdAt: new Date(), updatedAt: new Date() },
      { name: '4th', createdAt: new Date(), updatedAt: new Date() },
      { name: '5th', createdAt: new Date(), updatedAt: new Date() },
      { name: '6th', createdAt: new Date(), updatedAt: new Date() },
      { name: '7th', createdAt: new Date(), updatedAt: new Date() },
      { name: '8th', createdAt: new Date(), updatedAt: new Date() },
      { name: '9th', createdAt: new Date(), updatedAt: new Date() },
      { name: '10th', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('Subjects', [
      { name: 'Math', createdAt: new Date(), updatedAt: new Date() },
      { name: 'English', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gujrati', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Math', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Science', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('Universities', [
      { name: 'Parul University', createdAt: new Date(), updatedAt: new Date() },
      { name: 'GTU', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nirma University', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('DegreeTypes', [
      { name: 'Bachelor', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Master', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('ExamTypes', [
      { name: 'Engineering', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Medical', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jee', createdAt: new Date(), updatedAt: new Date() },
    ]);

    await queryInterface.bulkInsert('Medium', [
      { name: 'Gujarati', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hindi', createdAt: new Date(), updatedAt: new Date() },
      { name: 'English', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Institutes', null, {});
    await queryInterface.bulkDelete('Boards', null, {});
    await queryInterface.bulkDelete('ClassCategories', null, {});
    await queryInterface.bulkDelete('Standards', null, {});
    await queryInterface.bulkDelete('Subjects', null, {});
    await queryInterface.bulkDelete('Universities', null, {});
    await queryInterface.bulkDelete('DegreeTypes', null, {});
    await queryInterface.bulkDelete('ExamTypes', null, {});
  },
};
