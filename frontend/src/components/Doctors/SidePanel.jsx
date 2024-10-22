// import React from 'react';
// import './SidePanel.css';

// const SidePanel = () => {
//   return (
//     <div className="p-3 rounded shadow-panelShadow lg:p-5-md side-panel">
//       <div className="flex items-center justify-between">
//         <p className="mt-0 font-semibold text_para">Ticket price</p>
//         <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
//           500 BDT
//         </span>
//       </div>
//       <div className="mt-[30px]">
//         <p className="mt-0 font-semibold text_para text-headingColor">Available Time Slots:</p>
//         <ul className="mt-3">
//           <li className="flex items-center justify-between mb-2">
//             <p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
//             <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
//           </li>
//           <li className="flex items-center justify-between mb-2">
//             <p className="text-[15px] leading-6 text-textColor font-semibold">Monday</p>
//             <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
//           </li>
//           <li className="flex items-center justify-between mb-2">
//             <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
//             <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
//           </li>
//         </ul>
//       </div>
//       <button className="w-full px-2 rounded btn-md">Book Appointment</button>
//     </div>
//   );
// };

// export default SidePanel;







/** BEFORE WAD LAB */

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './SidePanel.css';

// const SidePanel = () => {
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [appointmentBooked, setAppointmentBooked] = useState(false);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setSelectedTime(null);
//   };

//   const handleTimeChange = (time) => {
//     setSelectedTime(time);
//   };

//   const handleBookAppointment = () => {
//     if (selectedDate && selectedTime) {
//       setAppointmentBooked(true);
//       setShowCalendar(false);
//     }
//   };

//   return (
//     <div className="side-panel-wrapper">
//       <div className="side-panel">
//         <div className="flex justify-between items-center">
//           <p className="text_para font-semibold">Ticket price</p>
//           <span className="text-headingColor font-bold text-[16px] leading-7 lg:text-[22px] lg:leading-8">
//             500 BDT
//           </span>
//         </div>
//         <div className="mt-[30px]">
//           <p className="text_para font-semibold text-headingColor">Available Time Slots:</p>
//           <ul className="mt-3">
//             <li className="flex justify-between mb-2">
//               <p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
//               <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
//             </li>
//             <li className="flex justify-between mb-2">
//               <p className="text-[15px] leading-6 text-textColor font-semibold">Monday</p>
//               <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
//             </li>
//             <li className="flex justify-between mb-2">
//               <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
//               <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
//             </li>
//           </ul>
//         </div>
//         <button className="w-full px-2 rounded btn-md mt-4" onClick={() => setShowCalendar(!showCalendar)}>
//           {showCalendar ? 'Hide Calendar' : 'Book Appointment'}
//         </button>
//         {appointmentBooked && (
//           <p className="mt-4 text-center text-green-600">
//             Appointment booked for: {selectedDate.toLocaleDateString()} at {selectedTime}
//           </p>
//         )}
//       </div>
//       {showCalendar && (
//         <div className="calendar-container">
//           <DatePicker
//             selected={selectedDate}
//             onChange={handleDateChange}
//             inline
//             minDate={new Date()}
//           />
//           {selectedDate && (
//   <div className="mt-4">
//     <p className="text_para font-semibold">Select Time:</p>
//     <select
//       className="w-full p-2 mt-2 border rounded"
//       value={selectedTime}
//       onChange={(e) => handleTimeChange(e.target.value)}
//     >
//       <option value="">Choose a time</option>
//       <option value="09:00">9:00 AM</option>
//       <option value="10:00">10:00 AM</option>
//       <option value="11:00">11:00 AM</option>
//       <option value="12:00">12:00 PM</option>
//       <option value="13:00">1:00 PM</option>
//       <option value="14:00">2:00 PM</option>
//       <option value="15:00">3:00 PM</option>
//       <option value="16:00">4:00 PM</option>
//       <option value="17:00">5:00 PM</option>
//       <option value="18:00">6:00 PM</option>
//       <option value="19:00">7:00 PM</option>
//       <option value="20:00">8:00 PM</option>
//     </select>
//   </div>
// )}
//           {selectedDate && selectedTime && (
//             <button className="w-full px-2 rounded btn-md mt-4" onClick={handleBookAppointment}>
//               Confirm Appointment
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SidePanel;




/** AFTER WAD LAB */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SidePanel.css';
import { addAppointment } from '../../api';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const SidePanel = ({ doctorId }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = async () => {
    if (!user || user.role !== 'patient') {
      alert('Please log in as a patient to book an appointment.');
      navigate('/login');
      return;
    }

    try {
      if (!selectedDate || !selectedTime) {
        alert('Please select both date and time for the appointment.');
        return;
      }

      const patientId = user.userId;

      if (!doctorId) {
        alert('Missing doctor information. Please try again.');
        return;
      }

      if (!patientId) {
        alert('Missing patient information. Please try again.');
        return;
      }

      // Validate doctorId and patientId
      if (!/^[0-9a-fA-F]{24}$/.test(doctorId) || !/^[0-9a-fA-F]{24}$/.test(patientId)) {
        alert('Invalid doctor or patient ID. Please try again.');
        return;
      }

      const appointmentDate = new Date(selectedDate);
      appointmentDate.setHours(parseInt(selectedTime.split(':')[0]), parseInt(selectedTime.split(':')[1]));

      const appointmentData = {
        doctorId: doctorId,
        patientId: patientId,
        date: appointmentDate.toISOString()
      };

      console.log('Appointment data being sent:', appointmentData);

      const response = await addAppointment(appointmentData);

      if (response) {
        setAppointmentBooked(true);
        setShowCalendar(false);
        alert('Appointment booked successfully!');
      } else {
        alert('Failed to book appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
      }
      alert('An error occurred while booking the appointment. Please try again.');
    }
  };

  const handleBookButtonClick = () => {
    if (!user || user.role !== 'patient') {
      alert('Please log in as a patient to book an appointment.');
      navigate('/login');
    } else {
      setShowCalendar(!showCalendar);
    }
  };

  return (
    <div className="side-panel-wrapper">
      <div className="side-panel">
        <div className="flex justify-between items-center">
          <p className="text_para font-semibold">Ticket price</p>
          <span className="text-headingColor font-bold text-[16px] leading-7 lg:text-[22px] lg:leading-8">
            500 BDT
          </span>
        </div>
        <div className="mt-[30px]">
          <p className="text_para font-semibold text-headingColor">Available Time Slots:</p>
          <ul className="mt-3">
            <li className="flex justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
            </li>
            <li className="flex justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">Monday</p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
            </li>
            <li className="flex justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30 PM</p>
            </li>
          </ul>
        </div>
        <button className="w-full px-2 rounded btn-md mt-4" onClick={handleBookButtonClick}>
          {showCalendar ? 'Hide Calendar' : 'Book Appointment'}
        </button>
        {appointmentBooked && (
          <p className="mt-4 text-center text-green-600">
            Appointment booked for: {selectedDate.toLocaleDateString()} at {selectedTime}
          </p>
        )}
      </div>
      {showCalendar && (
        <div className="calendar-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            minDate={new Date()}
          />
          {selectedDate && (
            <div className="mt-4">
              <p className="text_para font-semibold">Select Time:</p>
              <select
                className="w-full p-2 mt-2 border rounded"
                value={selectedTime}
                onChange={(e) => handleTimeChange(e.target.value)}
              >
                <option value="">Choose a time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>
          )}
          {selectedDate && selectedTime && (
            <button className="w-full px-2 rounded btn-md mt-4" onClick={handleBookAppointment}>
              Confirm Appointment
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SidePanel;
