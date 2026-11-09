# Multilingual Sign Language Recognition System (ASL + ISL)

## 1. Project Overview

The **Multilingual Sign Language Recognition System** is an AI-powered web application designed to recognise hand gestures from two sign languages:

- American Sign Language (ASL)
- Indian Sign Language (ISL)

The system aims to recognise alphabets (A–Z) and numbers (0–9) from both languages and convert the recognised gestures into readable English text.

It uses computer vision, hand landmark detection and machine learning techniques to identify and classify sign language gestures.

## 2. Project Objectives

- Recognise ASL alphabets (A–Z) and numbers (0–9).
- Recognise ISL alphabets (A–Z) and numbers (0–9).
- Provide separate recognition support for both sign languages.
- Detect hands and extract hand landmarks from input images.
- Train and evaluate suitable machine learning models.
- Develop a user-friendly web interface.
- Convert recognised gestures into readable English text.
- Evaluate recognition performance under different conditions.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Python | Main programming language |
| OpenCV | Image processing |
| MediaPipe | Hand detection and landmark extraction |
| NumPy | Numerical operations |
| Pandas | Dataset handling |
| Scikit-learn | Machine learning |
| TensorFlow/Keras | Optional deep learning experiments |
| Flask | Backend development |
| HTML | Webpage structure |
| CSS | Website styling |
| JavaScript | Frontend functionality |
| Git & GitHub | Version control |

## 4. System Workflow

1. **Language Selection:** User selects ASL or ISL.
2. **Input:** User provides a sign language image or webcam input.
3. **Image Processing:** OpenCV processes the input.
4. **Hand Detection:** MediaPipe detects the hand.
5. **Landmark Extraction:** 21 hand landmarks are extracted.
6. **Feature Extraction:** Landmark coordinates are converted into numerical features.
7. **Model Prediction:** The corresponding language recognition model classifies the gesture.
8. **Output:** The predicted alphabet or number is displayed as English text.

## 5. Development Phases

### Phase 1: Dataset Collection
- Find suitable ASL and ISL datasets.
- Collect alphabets A–Z and numbers 0–9 for both languages.
- Verify labels and image quality.
- Organise datasets separately by language and class.
- Check dataset diversity and class balance.

### Phase 2: Image Preprocessing
- Load and inspect images.
- Resize and prepare images where necessary.
- Apply data augmentation.
- Divide datasets into training, validation and testing sets.

### Phase 3: Hand Detection and Feature Extraction
- Implement MediaPipe hand detection.
- Extract 21 hand landmarks.
- Normalise landmark coordinates.
- Generate structured feature datasets for both languages.

### Phase 4: Model Development
- Train suitable classification models.
- Experiment with Random Forest, MLP and XGBoost.
- Compare model performance.
- Evaluate accuracy, precision, recall and F1-score.
- Select and save the best-performing model or models.

### Phase 5: Website Development
- Develop the frontend.
- Add ASL and ISL language selection.
- Implement image upload and/or webcam input.
- Create the Flask backend.
- Display recognition results.

### Phase 6: Integration and Testing
- Integrate frontend, backend and trained models.
- Test all 36 classes in each language.
- Test under different lighting and background conditions.
- Evaluate both languages independently.
- Identify and fix recognition errors.

### Phase 7: Documentation
- Document the methodology.
- Record experimental results.
- Prepare project documentation.
- Prepare the final demonstration.

## 6. Project Structure

```text
Multilingual-Sign-Recognition/
│
├── dataset/
│   ├── ASL/
│   │   ├── train/
│   │   ├── validation/
│   │   └── test/
│   │
│   └── ISL/
│       ├── train/
│       ├── validation/
│       └── test/
│
├── preprocessing/
├── feature_extraction/
├── notebooks/
│
├── models/
│   ├── asl_model/
│   └── isl_model/
│
├── backend/
│   └── app.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── tests/
├── docs/
├── requirements.txt
└── README.md
```

## 7. Model Evaluation

Each language will be evaluated separately using:

- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix
- Prediction Time

The results will help identify the strengths and limitations of the recognition system for both languages.

## 8. Team Collaboration Guidelines

All four team members are expected to understand and contribute to every development phase.

1. Understand the task before starting implementation.
2. Research unfamiliar concepts using reliable online resources.
3. Try troubleshooting errors independently before asking other team members.
4. Share useful resources and solutions with the entire team.
5. Test code before pushing changes to GitHub.
6. Keep the repository updated.
7. Document important changes and decisions.
8. Communicate blockers clearly.

**The objective is for every team member to understand the complete project, rather than only one particular module.**

## 9. GitHub Contribution Guidelines

Before making changes:

```bash
git pull origin main
```

After completing changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

For larger changes, create a separate branch and use a pull request before merging into the main branch.

Avoid pushing virtual environments, restricted datasets, API keys, passwords and unnecessary temporary files.

## 10. Getting Started

### Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd Multilingual-Sign-Recognition
```

### Create a virtual environment

```bash
python -m venv venv
```

### Activate the environment (Windows)

```bash
venv\Scripts\activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

## 11. Important Technical Considerations

- ASL and ISL datasets must be maintained separately.
- Do not assume that the same hand gesture represents the same alphabet in both languages.
- Verify the correctness of every dataset label.
- Use consistent preprocessing during training and prediction.
- Avoid data leakage between training and testing.
- Test with different users, hand orientations, backgrounds and lighting conditions.
- Static gesture recognition does not cover signs that require movement. These require sequential frame processing and temporal models such as LSTM or GRU.
- Recognition of individual letters does not automatically provide complete sentence translation.

## 12. Expected Outcome

A functional multilingual web application that:

- Supports ASL and ISL selection.
- Accepts sign language image or webcam input.
- Detects and classifies hand gestures.
- Recognises alphabets and numbers.
- Displays the predicted result as English text.

## 13. Future Scope

- Dynamic sign language recognition.
- Word and sentence formation.
- Text-to-speech conversion.
- Recognition of additional signs.
- Improved real-time recognition.
- Support for additional sign languages.

---

**Project:** Multilingual Sign Language Recognition System  
**Domain:** Artificial Intelligence, Machine Learning and Computer Vision  
**Languages:** American Sign Language (ASL) and Indian Sign Language (ISL)  
**Recognition Classes:** A–Z and 0–9 for each language  
**Team Size:** 4 Members
