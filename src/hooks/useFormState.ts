import { useState } from "react";

type FormState<T> = T & { [key: string]: any };

/**
 * useFormState - A function to update the form state in a React component.
 *
 * This function allows for flexible updates to the form state by specifying a particular field,
 * merging partial state updates, or applying a function to derive new state based on the previous state.
 *
 * @param {string | Partial<T> | ((prevState: T) => Partial<T>)} field - Specifies what to update:
 *   - A string representing the name of a specific field in the form state.
 *   - A partial object containing the fields and their new values to be merged into the state.
 *   - A function that takes the previous state and returns a partial object with updates.
 * @param {any} [value] - The new value to set for the specified field (used only if `field` is a string).
 *
 * @example
 * // Component managing a user profile form state
 * const UserProfileForm = () => {
 *   const [formState, updateFormState] = useFormState<UserProfile>({ name: '', email: '', bio: '' });
 *
 *   // Handle input changes and update state
 *   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 *     const { name, value } = event.target;
 *     updateFormState(name, value); // Updates a specific field
 *   };
 *
 *   // Increment a counter value based on the previous state
 *   const incrementCounter = () => {
 *     updateFormState((prevState) => ({ count: (prevState.count || 0) + 1 }));
 *   };
 *
 *   // Handle form submission
 *   const handleSubmit = (event: React.FormEvent) => {
 *     event.preventDefault();
 *     console.log("Form submitted:", formState);
 *     // Submit form logic here
 *   };
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <div>
 *         <label>
 *           Name:
 *           <input
 *             type="text"
 *             name="name"
 *             value={formState.name}
 *             onChange={handleChange}
 *           />
 *         </label>
 *       </div>
 *       <div>
 *         <label>
 *           Email:
 *           <input
 *             type="email"
 *             name="email"
 *             value={formState.email}
 *             onChange={handleChange}
 *           />
 *         </label>
 *       </div>
 *       <div>
 *         <label>
 *           Bio:
 *           <textarea
 *             name="bio"
 *             value={formState.bio}
 *             onChange={handleChange}
 *           />
 *         </label>
 *       </div>
 *       <button type="submit">Submit</button>
 *       <button type="button" onClick={incrementCounter}>Increment Counter</button>
 *     </form>
 *   );
 * };
 */
export default function useFormState<T extends object>(initialValue: T) {
  const [formState, setFormState] = useState<FormState<T>>(initialValue);

  function updateFormState(field: string | Partial<T> | ((prevState: T) => Partial<T>), value?: any) {
    setFormState((prevState) => {
      if (typeof field === "string") {
        return { ...prevState, [field]: value };
      }
      if (field instanceof Function) {
        return { ...prevState, ...field(prevState) };
      }
      return { ...prevState, ...field };
    });
  }

  return [formState, updateFormState] as const;
}
