export const portfolioData = {
  name: "Keshavardhan",
  title: "AI & ML Engineer | Full Stack Developer",
  email: "keshavardhanreddyb@gmail.com",
  phone: "+91 9550214752",
  location: "India",
  linkedin: "https://linkedin.com/in/keshavardhan",
  github: "https://github.com/keshavardhan",
  
  summary: `Passionate Computer Science student specializing in Artificial Intelligence and Machine Learning. 
  Experienced in developing intelligent applications using Deep Learning, Natural Language Processing, 
  and Computer Vision. Strong foundation in Full Stack Development with hands-on experience building 
  end-to-end solutions. Eager to leverage cutting-edge AI technologies to solve real-world problems.`,

  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Malla Reddy University",
      location: "Hyderabad, India",
      duration: "2022 - 2026",
      gpa: "8.5/10",
    },
  ],

  skills: {
    programming: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
    aiml: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "YOLO"],
    nlp: ["NLTK", "spaCy", "Hugging Face Transformers", "LangChain", "GPT APIs"],
    web: ["React", "Node.js", "Flask", "Streamlit"],
    tools: ["Git", "AWS", "MongoDB", "PostgreSQL"],
    concepts: ["Deep Learning", "Machine Learning", "Computer Vision", "NLP", "MLOps"],
  },

  projects: [
    {
      id: 1,
      title: "Potato Disease Detection",
      description: "A mobile application that predicts potato plant diseases by analyzing leaf images. Built with Deep Learning and deployed using Streamlit for real-time predictions. Helps farmers identify and prevent crop diseases early.",
      technologies: ["Python", "TensorFlow", "CNN", "Streamlit", "OpenCV"],
      videoPath: "/videos/potato-disease-detection.mp4",
      github: "https://github.com/keshavardhan/potato-disease-detection",
      demo: "",
    },
    {
      id: 2,
      title: "Nerify App",
      description: "Built an NLP model with DistilBERT on the CoNLL-2003 dataset to recognize multi-word named entities. Implemented token classification with PyTorch, ensuring accurate recognition of complex entities in real-world text.",
      technologies: ["Python", "PyTorch", "DistilBERT", "NLP", "Hugging Face"],
      videoPath: "/videos/nerify-app.mp4",
      github: "https://github.com/keshavardhan/nerify",
      demo: "",
    },
    {
      id: 3,
      title: "Smart Health Recognition",
      description: "A comprehensive health monitoring system using AI to recognize and analyze health patterns. Implements computer vision and deep learning for accurate health parameter detection and recommendations.",
      technologies: ["Python", "Deep Learning", "Computer Vision", "TensorFlow", "Flask"],
      videoPath: "/videos/smart-health-recognition.mp4",
      github: "https://github.com/keshavardhan/smart-health",
      demo: "",
    },
  ],

  experience: [
    {
      role: "ML Model Developer & Data Collector",
      company: "Viswam.AI",
      location: "IIIT Hyderabad",
      duration: "Jul 2025 - Sep 2025",
      responsibilities: [
        "Developed and trained machine learning models for AI solutions",
        "Collected and curated datasets for model training and validation",
        "Contributed to building impactful technology solutions for Global South challenges",
        "Participated in the Summer of AI Internship program",
      ],
    },
  ],

  certifications: [
    {
      name: "Summer of AI Internship",
      issuer: "IIIT Hyderabad - Viswam.AI",
      year: "2025",
    },
    {
      name: "MCP Project Completion",
      issuer: "NxtWave - CCBP 4.0 Academy",
      year: "2025",
    },
  ],
};
