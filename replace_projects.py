import re

with open('public/js/works.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_projects = """var PROJECTS = [
  { id: 'cogniwire', title: 'Cogniwire', desc: "A modular, scalable, multi-modal web browser. Built entirely from scratch. Integrated 5 concurrent API systems for real-time analytics. Optimized rendering pipelines resulting in an 80% decrease in memory footprint compared to Chrome.", category: 'Custom Browser', year: '2026', tags: ['React', 'API Integration', 'Browser Engine'], cover: '/assets/images/projects/Cogniwire/1.png' },
  { id: 'madhwa', title: 'Madhwa Hrudayavaasa', desc: "A high-traffic web platform built for a podcast channel (~15k followers). Integrated custom ASCII art algorithms and automated Google API DevOps pipelines to dynamically fetch and deploy new podcast catalogues instantly upon upload.", category: 'Web Platform', year: '2026', tags: ['API Integration', 'DevOps', 'ASCII Art'], cover: '/assets/images/projects/Madhwa/1.png' },
  { id: 'rehave', title: 'Rehave', desc: "My most ambitious hardware-software crossover. Designed, 3D-printed (CAD), and assembled an end-to-end neurotech headset. Engineered custom PCBs to accurately capture brain signals. Currently holding 1 copyright and an active patent process for this cognitive system.", category: 'Neurotech Hardware', year: '2026', tags: ['PCB Design', 'CAD', 'Hardware'], cover: '/assets/images/projects/Rehave/1.PNG' },
  { id: 'aura-exe', title: 'Aura.exe', desc: "A 3-iteration neuro-analysis ecosystem. Evolved from a Vue web app, to a React/Electron hybrid, into a blazing-fast C++ standalone application. Leveraged DSP and ML algorithms to decode raw brain signals in real-time and generate analytical PDF reports, backed by Supabase auth and 3D visualizers.", category: 'Standalone Application', year: '2026', tags: ['C++', 'Electron', 'Machine Learning', 'Supabase'], cover: '/assets/images/projects/AuraExe/1.png' },
  { id: 'matha-app', title: 'Matha App', desc: "A complete, production-ready mobile application built in React Native. Fully architected the frontend to handle secure payments, seamless bookings, receipt generation, and real-time data analytics, ready for imminent PlayStore deployment.", category: 'Mobile Application', year: '2026', tags: ['React Native', 'Mobile Dev', 'Payments'], cover: '/assets/images/projects/MathaApp/1.png' },
  { id: 'kharosthi', title: 'Kharosthi Decryptor', desc: "A bespoke machine learning framework built to decrypt and translate the ancient Kharosthi script into English. Leveraged NLTK and advanced ML classification models to parse unknown linguistic patterns.", category: 'Machine Learning Framework', year: '2024', tags: ['Python', 'NLTK', 'AI/ML'], cover: '/assets/images/portal.png' },
  { id: 'yanam-robo', title: 'Yanam Robo', desc: "An autonomous vehicular robot trained entirely on native Kannada voice commands. Engineered using SLAM algorithms and custom embedded hardware (Raspberry Pi/MCUs). Trained against a massive localized dataset to navigate and respond dynamically.", category: 'Autonomous Robotics', year: '2025', tags: ['SLAM', 'Embedded Systems', 'Computer Vision'], cover: '/assets/images/portal.png' },
  { id: 'yolo', title: 'YOLO Emergency Tracker', desc: "An IoT and computer vision ecosystem designed for emergency response. Deployed advanced object detection (YOLO) to track vehicle license plates in real-time, autonomously triggering alerts to nearby hospitals upon detecting accidents.", category: 'IoT & Computer Vision', year: '2023', tags: ['YOLO', 'IoT', 'Computer Vision'], cover: '/assets/images/portal.png' }
];"""

content = re.sub(r'var PROJECTS = \[.*?\];', new_projects, content, flags=re.DOTALL)

with open('public/js/works.js', 'w', encoding='utf-8') as f:
    f.write(content)
