export const dummyHackathons = [
    {
      id: 1,
      name: 'Quantum Computing Challenge',
      dateCreated: '2023-10-15',
      status: 'Active',
      category: 'Tech',
      startDate: '2023-11-01',
      endDate: '2023-11-30',
      rounds: 3,
      participationMode: 'Team',
      criteria: ['Innovation', 'Feasibility', 'Implementation'],
      teams: [
        {
          id: 101,
          name: 'Quantum Leapers',
          progress: 65,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-11-05' },
            { round: 'Development', submitted: false }
          ],
          score: 85
        },
        {
          id: 102,
          name: 'Qubit Crushers',
          progress: 40,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-11-04' },
            { round: 'Development', submitted: false }
          ],
          score: 72
        },
        {
          id: 103,
          name: 'Superposition Squad',
          progress: 80,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-11-03' },
            { round: 'Development', submitted: true, date: '2023-11-15' }
          ],
          score: 88
        }
      ]
    },
    {
      id: 2,
      name: 'Sustainable Future Hack',
      dateCreated: '2023-09-20',
      status: 'Completed',
      category: 'Sustainability',
      startDate: '2023-10-01',
      endDate: '2023-10-28',
      rounds: 2,
      participationMode: 'Individual',
      criteria: ['Impact', 'Creativity', 'Scalability'],
      teams: [
        {
          id: 201,
          name: 'Eco Warriors',
          progress: 100,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-10-05' },
            { round: 'Final', submitted: true, date: '2023-10-25' }
          ],
          score: 92
        },
        {
          id: 202,
          name: 'Green Innovators',
          progress: 100,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-10-04' },
            { round: 'Final', submitted: true, date: '2023-10-24' }
          ],
          score: 87
        }
      ]
    },
    {
      id: 3,
      name: 'FinTech Innovation',
      dateCreated: '2023-08-10',
      status: 'Archived',
      category: 'Finance',
      startDate: '2023-09-01',
      endDate: '2023-09-20',
      rounds: 3,
      participationMode: 'Team',
      criteria: ['Innovation', 'Security', 'User Experience'],
      teams: [
        {
          id: 301,
          name: 'Blockchain Bros',
          progress: 100,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-09-03' },
            { round: 'Development', submitted: true, date: '2023-09-12' },
            { round: 'Final', submitted: true, date: '2023-09-19' }
          ],
          score: 88
        },
        {
          id: 302,
          name: 'Crypto Queens',
          progress: 100,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-09-04' },
            { round: 'Development', submitted: true, date: '2023-09-13' },
            { round: 'Final', submitted: true, date: '2023-09-18' }
          ],
          score: 95
        }
      ]
    },
    {
      id: 4,
      name: 'HealthTech Solutions',
      dateCreated: '2023-07-05',
      status: 'Archived',
      category: 'Healthcare',
      startDate: '2023-08-01',
      endDate: '2023-08-21',
      rounds: 2,
      participationMode: 'Team',
      criteria: ['Impact', 'Feasibility', 'Clinical Relevance'],
      teams: [
        {
          id: 401,
          name: 'MediCoders',
          progress: 100,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-08-03' },
            { round: 'Final', submitted: true, date: '2023-08-19' }
          ],
          score: 90
        },
        {
          id: 402,
          name: 'Health Hackers',
          progress: 100,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-08-04' },
            { round: 'Final', submitted: true, date: '2023-08-18' }
          ],
          score: 84
        }
      ]
    },
    {
      id: 5,
      name: 'EdTech Revolution',
      dateCreated: '2023-06-15',
      status: 'Archived',
      category: 'Education',
      startDate: '2023-07-01',
      endDate: '2023-07-20',
      rounds: 2,
      participationMode: 'Individual',
      criteria: ['Innovation', 'Accessibility', 'Engagement'],
      teams: [
        {
          id: 501,
          name: 'EduPioneers',
          progress: 100,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-07-05' },
            { round: 'Final', submitted: true, date: '2023-07-18' }
          ],
          score: 89
        },
        {
          id: 502,
          name: 'LearnLabs',
          progress: 100,
          submissions: [
            { round: 'Ideation', submitted: true, date: '2023-07-06' },
            { round: 'Final', submitted: true, date: '2023-07-17' }
          ],
          score: 91
        }
      ]
    },
    {
      id: 6,
      name: 'AI for Good',
      dateCreated: '2023-11-01',
      status: 'Upcoming',
      category: 'Tech',
      startDate: '2023-12-01',
      endDate: '2023-12-15',
      rounds: 2,
      participationMode: 'Team',
      criteria: ['Ethical AI', 'Social Impact', 'Technical Excellence'],
      teams: []
    }
  ];