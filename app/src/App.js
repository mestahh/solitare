import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Tableau from './components/Tableau';

const tableauDeal = {
  "columns": [
    {
      "column": [
        {
          "reversed": false,
          "shape": "CLUB",
          "value": "KING"
        }
      ],
      "complete": false,
      "empty": false
    },
    {
      "column": [
        {
          "reversed": true,
          "shape": "HEART",
          "value": "8"
        },
        {
          "reversed": false,
          "shape": "DIAMOND",
          "value": "3"
        }
      ],
      "complete": false,
      "empty": false
    },
    {
      "column": [
        {
          "reversed": true,
          "shape": "CLUB",
          "value": "7"
        },
        {
          "reversed": true,
          "shape": "DIAMOND",
          "value": "JACK"
        },
        {
          "reversed": false,
          "shape": "CLUB",
          "value": "4"
        }
      ],
      "complete": false,
      "empty": false
    },
    {
      "column": [
        {
          "reversed": true,
          "shape": "CLUB",
          "value": "ACE"
        },
        {
          "reversed": true,
          "shape": "CLUB",
          "value": "9"
        },
        {
          "reversed": true,
          "shape": "DIAMOND",
          "value": "6"
        },
        {
          "reversed": false,
          "shape": "DIAMOND",
          "value": "8"
        }
      ],
      "complete": false,
      "empty": false
    },
    {
      "column": [
        {
          "reversed": true,
          "shape": "DIAMOND",
          "value": "5"
        },
        {
          "reversed": true,
          "shape": "HEART",
          "value": "5"
        },
        {
          "reversed": true,
          "shape": "SPADE",
          "value": "4"
        },
        {
          "reversed": true,
          "shape": "DIAMOND",
          "value": "7"
        },
        {
          "reversed": false,
          "shape": "CLUB",
          "value": "JACK"
        }
      ],
      "complete": false,
      "empty": false
    },
    {
      "column": [
        {
          "reversed": true,
          "shape": "CLUB",
          "value": "QUEEN"
        },
        {
          "reversed": true,
          "shape": "SPADE",
          "value": "10"
        },
        {
          "reversed": true,
          "shape": "SPADE",
          "value": "6"
        },
        {
          "reversed": true,
          "shape": "DIAMOND",
          "value": "9"
        },
        {
          "reversed": true,
          "shape": "DIAMOND",
          "value": "KING"
        },
        {
          "reversed": false,
          "shape": "HEART",
          "value": "6"
        }
      ],
      "complete": false,
      "empty": false
    },
    {
      "column": [
        {
          "reversed": true,
          "shape": "DIAMOND",
          "value": "10"
        },
        {
          "reversed": true,
          "shape": "DIAMOND",
          "value": "2"
        },
        {
          "reversed": true,
          "shape": "HEART",
          "value": "9"
        },
        {
          "reversed": true,
          "shape": "HEART",
          "value": "4"
        },
        {
          "reversed": true,
          "shape": "CLUB",
          "value": "8"
        },
        {
          "reversed": true,
          "shape": "CLUB",
          "value": "10"
        },
        {
          "reversed": false,
          "shape": "SPADE",
          "value": "9"
        }
      ],
      "complete": false,
      "empty": false
    }
  ]
};

function App() {

  const [tableau, setTableau] = useState([]);
  const count = useSelector(state => state.tableau.value)

  useEffect(() => {
    setTableau(tableauDeal.columns);
  }, []);


  return (
    <div>
      <header>
        <h1>{count}</h1>
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
