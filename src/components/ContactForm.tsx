
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        people: '2',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        date: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (name in errors) {
            setErrors(prev => ({ ...prev, [name]: false }));
        }
    };

    const validate = () => {
        let isValid = true;
        const newErrors = {
            name: false,
            email: false,
            date: false
        };

        if (formData.name.trim().length < 3) {
            newErrors.name = true;
            isValid = false;
            toast.error('Name must be at least 3 characters long', {
                className: 'bg-cafe-100 text-cafe-900 border border-primary'
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = true;
            isValid = false;
            toast.error('Please enter a valid email address', {
                className: 'bg-cafe-100 text-cafe-900 border border-primary'
            });
        }

        if (!formData.date) {
            newErrors.date = true;
            isValid = false;
            toast.error('Please select a date', {
                className: 'bg-cafe-100 text-cafe-900 border border-primary'
            });
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Simulate API call
            console.log('Form submitted:', formData);
            toast.success('Table reserved successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                className: 'bg-cafe-100 text-cafe-900 border border-primary'
            });
            // Reset form
            setFormData({
                name: '',
                email: '',
                date: '',
                people: '2',
                message: ''
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-2 md:p-4 lg:p-6 xl:p-8 bg-cafe-700 rounded-xl grid grid-cols-2 items-start gap-4">
            <h3 className="text-cafe-50 text-3xl font-medium col-span-2">Make a Reservation</h3>

            <fieldset className="flex flex-col gap-y-4 col-span-2 md:col-span-1">
                <input
                    className={`w-full min-h-14 border ${errors.name ? 'border-red-500' : 'border-cafe-500'} bg-cafe-600 px-4 py-2 rounded-lg text-cafe-100 focus:outline-0 text-xl placeholder-cafe-300`}
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-label='Your name'
                />
            </fieldset>

            <fieldset className="flex flex-col gap-y-4 col-span-2 md:col-span-1">
                <input
                    className={`w-full min-h-14 border ${errors.email ? 'border-red-500' : 'border-cafe-500'} bg-cafe-600 px-4 py-2 rounded-lg text-cafe-100 focus:outline-0 text-xl placeholder-cafe-300`}
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-label='Email Address'
                />
            </fieldset>

            <fieldset className="flex flex-col gap-y-4 col-span-2 md:col-span-1">
                <input
                    className={`w-auto min-h-14 border ${errors.date ? 'border-red-500' : 'border-cafe-500'} bg-cafe-600 px-4 py-2 rounded-lg text-cafe-100 focus:outline-0 text-xl`} // browser date picker styling is minimal, but background works
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    aria-label='Date'
                />
            </fieldset>

            <fieldset className="flex flex-col gap-y-4 col-span-2 md:col-span-1">
                <select
                    className="w-full min-h-14 border border-cafe-500 bg-cafe-600 px-4 py-2 rounded-lg text-cafe-100 focus:outline-0 text-xl"
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    aria-label='People'
                >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5+">5+ people</option>
                </select>
            </fieldset>

            <fieldset className="flex flex-col gap-y-4 col-span-2 md:col-span-2">
                <textarea
                    className="w-full min-h-14 border border-cafe-500 bg-cafe-600 px-4 py-2 rounded-lg text-cafe-100 focus:outline-0 text-xl placeholder-cafe-300"
                    rows={4}
                    placeholder="Special Request"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    aria-label='Special Request'
                ></textarea>
            </fieldset>

            <button className="w-full min-h-14 text-xl font-semibold bg-cafe-600 hover:bg-cafe-900 transition-colors hover:cursor-pointer rounded-lg text-cafe-100 col-span-2 lg:col-span-2">
                Reserve Table
            </button>
            <ToastContainer toastClassName={() => "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-cafe-100 text-cafe-900 border border-primary shadow-lg"} />
        </form>
    );
};
