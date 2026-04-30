import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GraduationCap, Plus } from 'lucide-react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

// Use environment variable or default to local backend
const API_URL = 'http://127.0.0.1:5000/api/students';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setStudents(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch student records. Make sure the backend server is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddOrUpdate = async (studentData) => {
    try {
      if (editingStudent) {
        const response = await axios.put(`${API_URL}/${editingStudent._id}`, studentData);
        setStudents(students.map(s => s._id === editingStudent._id ? response.data : s));
      } else {
        const response = await axios.post(API_URL, studentData);
        setStudents([response.data, ...students]);
      }
      setShowForm(false);
      setEditingStudent(null);
    } catch (err) {
      alert('Error saving student record.');
      console.error(err);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student record?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setStudents(students.filter(s => s._id !== id));
      } catch (err) {
        alert('Error deleting student record.');
        console.error(err);
      }
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingStudent(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <GraduationCap size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Student Portal</h1>
              <p className="text-sm text-slate-500">Manage student records and information</p>
            </div>
          </div>
          
          {!showForm && (
            <button 
              onClick={() => setShowForm(true)}
              className="btn-primary"
            >
              <Plus size={18} className="mr-2" /> Add New Student
            </button>
          )}
        </header>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center">
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Main Content */}
        <main>
          {showForm ? (
            <div className="mb-8">
              <StudentForm 
                onSubmit={handleAddOrUpdate} 
                initialData={editingStudent}
                onCancel={handleCancelForm}
              />
            </div>
          ) : null}

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <StudentList 
              students={students} 
              onEdit={handleEdit} 
              onDelete={handleDelete}
            />
          )}
        </main>
        
      </div>
    </div>
  );
}

export default App;
