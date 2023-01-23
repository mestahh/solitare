import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Tableau from './components/Tableau';

const tableauDeal = {
  "columns": [
    {
      "cards": [
        {
          "id": 1,
          "reversed": false,
          "shape": "CLUB",
          "value": "KING"
        }
      ],
      "complete": false,
      "empty": false,
      "id": 1
    },
    {
      "cards": [
        {
          "id": 2,
          "reversed": true,
          "shape": "HEART",
          "value": "8"
        },
        {
          "id": 3,
          "reversed": false,
          "shape": "DIAMOND",
          "value": "3"
        }
      ],
      "complete": false,
      "empty": false,
      "id": 2
    },
    {
      "cards": [
        {
          "id": 4,
          "reversed": true,
          "shape": "CLUB",
          "value": "7"
        },
        {
          "id": 5,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "JACK"
        },
        {
          "id": 6,
          "reversed": false,
          "shape": "CLUB",
          "value": "4"
        }
      ],
      "complete": false,
      "empty": false,
      "id": 3
    },
    {
      "cards": [
        {
          "id": 7,
          "reversed": true,
          "shape": "CLUB",
          "value": "ACE"
        },
        {
          "id": 8,
          "reversed": true,
          "shape": "CLUB",
          "value": "9"
        },
        {
          "id": 9,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "6"
        },
        {
          "id": 10,
          "reversed": false,
          "shape": "DIAMOND",
          "value": "8"
        }
      ],
      "complete": false,
      "empty": false,
      "id": 4
    },
    {
      "cards": [
        {
          "id": 11,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "5"
        },
        {
          "id": 12,
          "reversed": true,
          "shape": "HEART",
          "value": "5"
        },
        {
          "id": 13,
          "reversed": true,
          "shape": "SPADE",
          "value": "4"
        },
        {
          "id": 14,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "7"
        },
        {
          "id": 15,
          "reversed": false,
          "shape": "CLUB",
          "value": "JACK"
        }
      ],
      "complete": false,
      "empty": false,
      "id": 5
    },
    {
      "cards": [
        {
          "id": 16,
          "reversed": true,
          "shape": "CLUB",
          "value": "QUEEN"
        },
        {
          "id": 17,
          "reversed": true,
          "shape": "SPADE",
          "value": "10"
        },
        {
          "id": 18,
          "reversed": true,
          "shape": "SPADE",
          "value": "6"
        },
        {
          "id": 19,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "9"
        },
        {
          "id": 20,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "KING"
        },
        {
          "id": 21,
          "reversed": false,
          "shape": "HEART",
          "value": "6"
        }
      ],
      "complete": false,
      "empty": false,
      "id": 6
    },
    {
      "cards": [
        {
          "id": 22,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "10"
        },
        {
          "id": 23,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "2"
        },
        {
          "id": 24,
          "reversed": true,
          "shape": "HEART",
          "value": "9"
        },
        {
          "id": 25,
          "reversed": true,
          "shape": "HEART",
          "value": "4"
        },
        {
          "id": 26,
          "reversed": true,
          "shape": "CLUB",
          "value": "8"
        },
        {
          "id": 27,
          "reversed": true,
          "shape": "CLUB",
          "value": "10"
        },
        {
          "id": 28,
          "reversed": false,
          "shape": "SPADE",
          "value": "9"
        }
      ],
      "complete": false,
      "empty": false,
      "id": 7
    }
  ]
};

function App() {

  const [tableau, setTableau] = useState([]);
  // const count = useSelector(state => state.tableau.value)

  useEffect(() => {
    setTableau(tableauDeal.columns);
  }, []);


  return (
    <div>
      <header>
      </header>
      <main>
        <section id="main-top">

        </section>
        <Tableau tableau={tableau} />
      </main>
    </div>
  );
}

export default App;
