"""
Campus Emergency System - SQLite Database Setup Script
Course: BCA Final Year Minor/Major Project
Database: SQLite3 (campus_emergency.db)

Creates:
1. users table (Students & Administrators)
2. emergency_reports table (Incident reports with keyword classification & status)
"""

import sqlite3
import os

DB_NAME = "campus_emergency.db"

def init_database():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()

    # 1. Users Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        full_name TEXT NOT NULL,
        role TEXT NOT NULL CHECK(role IN ('student', 'admin')),
        roll_no TEXT,
        department TEXT,
        phone TEXT,
        email TEXT
    );
    """)

    # 2. Emergency Reports Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS emergency_reports (
        id TEXT PRIMARY KEY,
        student_username TEXT NOT NULL,
        student_name TEXT NOT NULL,
        roll_no TEXT,
        category TEXT NOT NULL CHECK(category IN ('Medical Emergency', 'Fire', 'Security Issue', 'Accident', 'Other')),
        location TEXT NOT NULL,
        description TEXT NOT NULL,
        priority TEXT NOT NULL CHECK(priority IN ('High', 'Medium', 'Low')),
        status TEXT NOT NULL DEFAULT 'Submitted' CHECK(status IN ('Submitted', 'In Progress', 'Resolved')),
        classification_reason TEXT,
        admin_notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (student_username) REFERENCES users(username)
    );
    """)

    # Seed Default Student & Admin accounts if table empty
    cursor.execute("SELECT COUNT(*) FROM users")
    if cursor.fetchone()[0] == 0:
        cursor.executemany("""
        INSERT INTO users (username, password, full_name, role, roll_no, department, phone, email)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, [
            ("student1", "bca2026", "Musskan Verma", "student", "22005011001", "BCA (Computer Applications)", "+91 9876543210", "student1@campus.edu"),
            ("student2", "bca2026", "Aman Gupta", "student", "22005011002", "BCA (Computer Applications)", "+91 9876543211", "student2@campus.edu"),
            ("admin", "admin123", "Chief Security Officer (Admin)", "admin", "EMP-041", "Campus Safety & Proctor Office", "+91 512 2696400", "admin@campus.edu")
        ])
        print("Seeded default users (Students & Admin).")

    conn.commit()
    conn.close()
    print(f"Database {DB_NAME} initialized successfully.")

if __name__ == "__main__":
    init_database()
