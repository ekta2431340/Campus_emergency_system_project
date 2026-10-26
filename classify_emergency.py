"""
Campus Emergency System - Keyword-Based Emergency Classifier
Language: Python 3
Course: BCA Final Year Minor/Major Project

This module implements simple, explainable rule-based keyword classification
to prioritize campus emergency reports during student viva presentations.
"""

import sys
import json

# Define keyword dictionaries for urgency levels
HIGH_PRIORITY_KEYWORDS = [
    "fire", "smoke", "burning", "blast", "explosion",
    "unconscious", "fainted", "not breathing", "heart attack", "chest pain",
    "severe bleeding", "fracture", "head injury", "collapsed", "stroke",
    "weapon", "knife", "gun", "assault", "physical attack", "violence",
    "trapped", "stuck in lift", "drowning", "electrocution", "poison", "immediate danger"
]

MEDIUM_PRIORITY_KEYWORDS = [
    "injury", "accident", "fall", "bleeding", "dizzy", "asthma",
    "theft", "stolen", "harassment", "stalking", "ragging", "threat",
    "water leak", "short circuit", "spark", "gas smell"
]

def classify_emergency(category: str, description: str) -> dict:
    """
    Classifies the priority of an emergency report based on category and description keywords.
    
    Parameters:
        category (str): The chosen category (e.g., 'Fire', 'Medical Emergency')
        description (str): The details entered by the student
        
    Returns:
        dict: Priority ('High', 'Medium', 'Low'), matched keywords, and explanation.
    """
    desc_lower = description.lower()
    matched_high = [kw for kw in HIGH_PRIORITY_KEYWORDS if kw in desc_lower]
    matched_medium = [kw for kw in MEDIUM_PRIORITY_KEYWORDS if kw in desc_lower]
    
    # Category based base checks
    if category in ["Fire"]:
        priority = "High"
        reason = "Fire emergencies are life-critical by default."
    elif matched_high:
        priority = "High"
        reason = f"High-priority critical keywords detected: {', '.join(matched_high)}"
    elif matched_medium or category in ["Medical Emergency", "Security Issue", "Accident"]:
        priority = "Medium"
        reason = f"Medium-priority keywords or urgent category: {', '.join(matched_medium) if matched_medium else category}"
    else:
        priority = "Low"
        reason = "Routine/standard reporting without immediate life-safety threat keywords."
        
    return {
        "priority": priority,
        "matched_keywords": matched_high + matched_medium,
        "reason": reason
    }

if __name__ == "__main__":
    # If run from command line: python classify_emergency.py "Fire" "Smoke coming from server room"
    if len(sys.argv) > 2:
        cat = sys.argv[1]
        desc = " ".join(sys.argv[2:])
        result = classify_emergency(cat, desc)
        print(json.dumps(result, indent=2))
    else:
        # Test cases for BCA viva demonstration
        test_samples = [
            ("Medical Emergency", "A student is unconscious and fainted near the library stairs."),
            ("Fire", "Heavy black smoke coming from Chemistry Lab 2."),
            ("Security Issue", "Someone stole my laptop from the cafeteria."),
            ("Other", "Water tap leaking in hostel ground floor.")
        ]
        for cat, desc in test_samples:
            res = classify_emergency(cat, desc)
            print(f"[{res['priority']}] Category: {cat} | Match: {res['matched_keywords']} | Reason: {res['reason']}")
