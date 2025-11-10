import React, { useState } from 'react';
import { ChevronRight, GraduationCap, Award, Briefcase, Calendar, Book, DollarSign, Smile, ChevronDown, ChevronUp, Home, Flag, Clock, Library, Heart, MessageCircle, TrendingUp, FileText, DollarSignIcon, AlertCircle } from 'lucide-react';

export default function StudentPortal() {
  const [gpaValue, setGpaValue] = useState(3.5);
  const [showSupport, setShowSupport] = useState(true);
  const [fafsaProgress, setFafsaProgress] = useState(65);
  const [degreeProgress, setDegreeProgress] = useState(52);
  const [showAdmissionResults, setShowAdmissionResults] = useState(false);

  const qualifiesForAdmission = gpaValue >= 2.5;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-red-600 font-bold text-2xl">UL</span>
              <span className="text-gray-700 font-medium">Lafayette Student Life & Success Hub</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
              <a href="#admission" className="hover:text-red-600 transition">Direct Admission</a>
              <a href="#enrollment" className="hover:text-red-600 transition">Enrollment Hub</a>
              <a href="#dashboard" className="hover:text-red-600 transition">Dashboard</a>
              <a href="#support" className="hover:text-red-600 transition">Support</a>
            </nav>
          </div>
          <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
            Student Portal <ChevronRight className="inline w-4 h-4 ml-1" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-red-900 text-white px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Every Student Gets<br />a Personalized Path</h1>
            <p className="text-xl mb-8 text-gray-200">Direct Admission • Guided Enrollment • AI-Powered Success • Workforce Pathways</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center shadow-lg transform hover:scale-105 transition">
              Start Your Path <ChevronRight className="ml-2 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Key Panels Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <GraduationCap className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Direct Admission</h3>
            <p className="text-gray-600">Apply without barriers.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <Calendar className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Guided Enrollment</h3>
            <p className="text-gray-600">Simplified onboarding and early advising.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <Award className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Scholarships & Aid</h3>
            <p className="text-gray-600">Smart matching for funding and microgrants.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <Briefcase className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Workforce Pathways</h3>
            <p className="text-gray-600">Internships and career connections that lead to jobs.</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div id="admission" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Direct Admission Portal */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Direct Admission Portal</h2>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">GPA Slider</label>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">0.0</span>
                  <span className="text-2xl font-bold text-red-600">{gpaValue.toFixed(1)}</span>
                  <span className="text-xs text-gray-500">4.0</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.1"
                  value={gpaValue}
                  onChange={(e) => {
                    setGpaValue(parseFloat(e.target.value));
                    setShowAdmissionResults(true);
                  }}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Transfer Pathway Selector</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                  <option>Select your major or college</option>
                  <option>College of Engineering</option>
                  <option>College of Business</option>
                  <option>College of Liberal Arts</option>
                  <option>College of Sciences</option>
                  <option>College of Education</option>
                  <option>College of Nursing</option>
                </select>
              </div>

              {showAdmissionResults && (
                <>
                  {qualifiesForAdmission ? (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <h3 className="font-bold text-green-900">You qualify for Direct Admission!</h3>
                      </div>
                      
                      <div className="space-y-3 mt-4">
                        <div className="flex items-start space-x-3">
                          <Home className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-sm text-gray-900">High School Students</h4>
                            <p className="text-xs text-gray-600">Seamless transition from high school to college</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Flag className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-sm text-gray-900">Veterans</h4>
                            <p className="text-xs text-gray-600">Special support and resources for military service members</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-sm text-gray-900">Adult Learners</h4>
                            <p className="text-xs text-gray-600">Flexible pathways for returning and non-traditional students</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                        <h3 className="font-semibold text-yellow-900">Consider Alternative Pathways</h3>
                      </div>
                      <p className="text-sm text-yellow-800">Based on your GPA, we recommend exploring our guided enrollment options or transfer pathways.</p>
                    </div>
                  )}
                </>
              )}

              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition">
                Apply Now
              </button>
            </div>
          </div>

          {/* Middle Column - Guided Enrollment Hub & Student Dashboard */}
          <div id="enrollment" className="space-y-6">
            {/* Guided Enrollment Hub */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Guided Enrollment Hub</h2>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">This Week</h3>
                  <span className="text-sm text-gray-500">4 tasks remaining</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-red-600 rounded bg-red-600 flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm font-medium">Financial Aid</span>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Complete</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                      <span className="text-sm font-medium">Housing Application</span>
                    </div>
                    <span className="text-xs text-gray-500">Due in 3 days</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                      <span className="text-sm font-medium">Advising Appointment</span>
                    </div>
                    <span className="text-xs text-gray-500">Not scheduled</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                      <span className="text-sm font-medium">Orientation Registration</span>
                    </div>
                    <span className="text-xs text-gray-500">Opens June 1</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">AI Next Best Action</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-600 hover:bg-red-50 transition group">
                    <Book className="w-6 h-6 text-gray-700 group-hover:text-red-600" />
                    <div className="text-left">
                      <div className="text-sm font-semibold">Book advising session</div>
                      <div className="text-xs text-gray-500">Course planning</div>
                    </div>
                  </button>

                  <button className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-red-600 hover:bg-red-50 transition group">
                    <Briefcase className="w-6 h-6 text-gray-700 group-hover:text-red-600" />
                    <div className="text-left">
                      <div className="text-sm font-semibold">Apply for internship</div>
                      <div className="text-xs text-gray-500">Career readiness</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Mini Widgets</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm font-semibold">Career Track</div>
                        <div className="text-xs text-gray-600">Résumé and interview milestones</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg cursor-pointer hover:bg-green-100 transition">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm font-semibold">Balance</div>
                        <div className="text-xs text-gray-600">Real-time tuition/aid balance</div>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-green-600">$765</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Dashboard (UL Nexus AI) */}
            <div id="dashboard" className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Student Dashboard</h2>
                <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">UL Nexus AI</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Degree Progress</h3>
                  <span className="text-3xl font-bold text-red-600">{degreeProgress}%</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">{degreeProgress}% to degree completion</div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-red-600 h-4 rounded-full transition-all duration-500" 
                    style={{ width: `${degreeProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* AI Highlight Banner */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-blue-900">AI System Alert</h4>
                    <p className="text-sm text-blue-800 mt-1">System detected course scheduling delay — contact your advisor.</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Weekly Planner</h3>
                  <span className="text-sm text-gray-500">8 upcoming</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="text-sm font-medium">Tasks</div>
                        <div className="text-xs text-gray-500">10 pending items</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center space-x-3">
                      <Book className="w-5 h-5 text-red-600" />
                      <div>
                        <div className="text-sm font-medium">Accounting Exam</div>
                        <div className="text-xs text-gray-500">Tomorrow at 10:00 AM</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-red-600">Due Soon</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="text-sm font-medium">Advising Appointment</div>
                        <div className="text-xs text-gray-500">Friday at 2:00 PM</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">4.2</div>
                    <div className="text-xs text-gray-600 mt-1">Current GPA</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">85%</div>
                    <div className="text-xs text-gray-600 mt-1">Attendance</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">12</div>
                    <div className="text-xs text-gray-600 mt-1">Credits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Scholarships & Support Services */}
          <div className="space-y-6">
            {/* Scholarships & Financial Aid Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Scholarships & Financial Aid</h2>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Scholarship Match (AI)</h3>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Engineering Excellence Scholarship</h4>
                      <p className="text-xs text-gray-600 mt-1">Up to $5,000 per year</p>
                      <button className="text-xs text-purple-600 font-medium mt-2 hover:underline">Learn more →</button>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Louisiana Resident Grant</h4>
                      <p className="text-xs text-gray-600 mt-1">Up to $2,500 per year</p>
                      <button className="text-xs text-purple-600 font-medium mt-2 hover:underline">Learn more →</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-700">FAFSA Progress Tracker</h3>
                  <span className="text-lg font-bold text-blue-600">{fafsaProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500" 
                    style={{ width: `${fafsaProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2">Complete your FAFSA to unlock financial aid opportunities</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Billing & Payment Plan</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Current Balance</span>
                    <span className="text-xl font-bold text-gray-900">$3,450</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">Payment Due</span>
                    <span className="text-sm font-semibold text-red-600">Dec 15, 2025</span>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold">
                    View Payment Options
                  </button>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-yellow-900">AI Tip</h4>
                    <p className="text-sm text-yellow-800 mt-1">Renew FAFSA before Dec 1 for priority consideration.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Services Hub */}
            <div id="support" className="bg-white rounded-xl shadow-lg p-6">
              <button 
                className="w-full flex items-center justify-between mb-4"
                onClick={() => setShowSupport(!showSupport)}
              >
                <h2 className="text-2xl font-bold">Support Services Hub</h2>
                {showSupport ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {showSupport && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-3 text-blue-900">Academic Support</h3>
                      <div className="space-y-2">
                        <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-600 transition">
                          <GraduationCap className="w-4 h-4" />
                          <span>Tutoring</span>
                        </button>
                        <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-600 transition">
                          <Library className="w-4 h-4" />
                          <span>Library</span>
                        </button>
                        <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-600 transition">
                          <FileText className="w-4 h-4" />
                          <span>Writing Center</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-3 text-green-900">Well-Being</h3>
                      <div className="space-y-2">
                        <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-green-600 transition">
                          <Heart className="w-4 h-4" />
                          <span>Counseling</span>
                        </button>
                        <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-green-600 transition">
                          <Clock className="w-4 h-4" />
                          <span>Time Management</span>
                        </button>
                        <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-green-600 transition">
                          <DollarSign className="w-4 h-4" />
                          <span>Financial Aid</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 text-white rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="w-6 h-6" />
                        <div>
                          <h4 className="font-semibold">24/7 Support</h4>
                          <p className="text-xs text-gray-300">We're here to help anytime</p>
                        </div>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold">
                        Chat Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 University of Louisiana at Lafayette. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
