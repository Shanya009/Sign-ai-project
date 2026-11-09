# Multilingual Sign Language Recognition System (ASL + ISL)

## 1. Project Overview

The **Multilingual Sign Language Recognition System** is an AI-powered web application designed to recognise static hand gestures from two sign languages:

- American Sign Language (ASL)
- Indian Sign Language (ISL)

The system accepts uploaded images representing alphabets (A–Z) and numbers (0–9) from both languages and converts the recognised gestures into readable English text.

It uses computer vision, hand landmark detection and machine learning techniques to identify and classify sign language gestures.

**Note:** This project focuses exclusively on static image recognition. It does not include webcam-based or live video recognition.

## 2. Project Objectives

- Recognise ASL alphabets (A–Z) and numbers (0–9).
- Recognise ISL alphabets (A–Z) and numbers (0–9).
- Provide separate recognition support for both sign languages.
- Accept uploaded images as input.
- Detect hands and extract hand landmarks.
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
| Pillow | Image loading and manipulation |
| NumPy | Numerical operations |
| Pandas | Dataset handling |
| Scikit-learn | Machine learning |
| XGBoost | Additional classification model |
| TensorFlow/Keras | Optional deep learning experiments |
| Joblib | Saving trained models |
| Flask | Backend development |
| HTML | Webpage structure |
| CSS | Website styling |
| JavaScript | Frontend functionality |
| Git & GitHub | Version control |

## 4. System Workflow

The proposed system follows this workflow:

1. **Language Selection:** User selects ASL or ISL.
2. **Image Upload:** User uploads an image containing a sign language gesture.
3. **Image Processing:** OpenCV processes the uploaded image.
4. **Hand Detection:** MediaPipe detects the hand in the image.
5. **Landmark Extraction:** 21 hand landmarks are extracted.
6. **Feature Extraction:** Landmark coordinates are converted into numerical features.
7. **Model Prediction:** The corresponding language recognition model classifies the gesture.
8. **Output:** The predicted alphabet or number is displayed as readable English text.

## 5. Development Phases

### Phase 1: Dataset Collection

- Find suitable ASL and ISL datasets.
- Collect images for alphabets A–Z and numbers 0–9.
- Verify labels and image quality.
- Organise datasets separately by language and class.
- Check dataset diversity and class balance.
- Document dataset sources and limitations.

### Phase 2: Image Preprocessing

- Load and inspect images.
- Resize and prepare images where necessary.
- Apply data augmentation.
- Remove duplicate, blurry and incorrectly labelled images.
- Divide datasets into training, validation and testing sets.

### Phase 3: Hand Detection and Feature Extraction

- Implement MediaPipe hand detection.
- Extract 21 hand landmarks.
- Understand X, Y and Z coordinates.
- Normalise landmark coordinates.
- Generate structured feature datasets for both languages.
- Handle images where no hand is detected.

### Phase 4: Model Development

- Train suitable classification models.
- Experiment with Random Forest, MLP and XGBoost.
- Compare model performance.
- Tune model parameters.
- Evaluate accuracy, precision, recall and F1-score.
- Generate confusion matrices.
- Select and save the best-performing model or models.

### Phase 5: Website Development

- Develop the frontend.
- Add ASL and ISL language selection.
- Implement image upload functionality.
- Display the uploaded image.
- Create the Flask backend.
- Connect the backend to the trained recognition model.
- Display the predicted alphabet or number.
- Add clear/reset functionality.
- Handle invalid image uploads and recognition errors.

### Phase 6: Integration and Testing

- Integrate frontend, backend and trained models.
- Test all 36 classes in each language.
- Test images with different backgrounds and lighting conditions.
- Test with different users and hand orientations.
- Evaluate ASL and ISL performance independently.
- Measure prediction time.
- Identify and fix recognition errors.

### Phase 7: Documentation

- Document the methodology.
- Record dataset sources.
- Document model training and comparison.
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
├── notebooks/
│
├── preprocessing/
│   ├── clean_data.py
│   └── augment_data.py
│
├── feature_extraction/
│   └── landmarks.py
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
│   └── evaluate.py
│
├── docs/
│
├── requirements.txt
└── README.md
```

*The folder structure may be modified as development progresses.*

## 7. Model Evaluation

Each language will be evaluated independently using:

- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix
- Prediction Time

Different models will be compared to identify the most suitable approach for recognising static gestures.

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
9. Ensure that everyone understands the complete project workflow.

**The objective is for every team member to understand the complete project rather than only one particular module.**

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

Avoid pushing:

- Virtual environments.
- Large datasets without checking repository limits and dataset permissions.
- API keys or passwords.
- Temporary files.
- Unnecessary generated files.

## 10. Getting Started

### Step 1: Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### Step 2: Enter the project directory

```bash
cd Multilingual-Sign-Recognition
```

### Step 3: Create a virtual environment

```bash
python -m venv venv
```

### Step 4: Activate the environment (Windows)

```bash
venv\Scripts\activate
```

### Step 5: Install dependencies

```bash
pip install -r requirements.txt
```

*The requirements file will be updated as the project dependencies are finalised.*

## 11. Important Technical Considerations

- Ensure datasets represent the correct sign language (ASL or ISL).
- Maintain separate language labels and datasets.
- Do not assume that identical hand shapes have identical meanings in both languages.
- Verify the correctness of every dataset label.
- Use consistent preprocessing during training and prediction.
- Avoid data leakage between training, validation and testing datasets.
- Test with different users, backgrounds, hand orientations and lighting conditions.
- Handle images where no hand is detected.
- Static image recognition does not recognise gestures that depend on movement.
- Recognition of individual letters does not automatically provide complete word or sentence translation.

## 12. Expected Outcome

A functional multilingual web application capable of:

- Supporting ASL and ISL selection.
- Accepting uploaded sign language images.
- Detecting and classifying static hand gestures.
- Recognising alphabets and numbers from both languages.
- Displaying the predicted result as readable English text.
- Providing a simple and user-friendly interface.

## 13. Future Scope

Possible future enhancements include:

- Dynamic sign language recognition.
- Word and sentence formation.
- Text-to-speech conversion.
- Recognition of additional sign language gestures.
- Improved recognition accuracy.
- Support for additional sign languages.

---

**Project:** Multilingual Sign Language Recognition System  
**Domain:** Artificial Intelligence, Machine Learning and Computer Vision  
**Languages:** American Sign Language (ASL) and Indian Sign Language (ISL)  
**Recognition Classes:** A–Z and 0–9 for each language  
**Input Method:** Static Image Upload Only  
**Team Size:** 4 Members
