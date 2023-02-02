// import { Component } from 'react';

// export class ContactsList extends Component {
//   render() {
//     return (
//       <ul>
//         {contacts.map(({ id, name, number }) => {
//           return (
//             <li key={id}>
//               {name}: {number} <button>Delete</button>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }
export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number} <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
