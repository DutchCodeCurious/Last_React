import React from "react";
import { getEvents } from "../Api/events.jsx";
import { getCategories } from "../Api/categories.jsx";
import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ListDisplay } from "../components/List.jsx";

export const EventsPage = () => {
  const [events, setEvents] = useState(null);
  const [category, setCategory] = useState(null);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [query, setQuery] = useState("");
  console.log("Render EventsPage");
  useEffect(() => {
    getEvents().then((res) => setEvents(res));
    getCategories().then((res) => setCategory(res));
  }, []);

  if (!events) {
    console.log("loading...");
    return <div>loading...</div>;
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setCheckedCategories((prevCategories) => {
      if (checked) {
        console.log("if");
        return [...prevCategories, parseInt(value)];
      } else {
        console.log("else");
        return prevCategories.filter(
          (category) => category !== parseInt(value)
        );
      }
    });
  };
  console.log(checkedCategories);
  const FilteredEvents = events.filter((event) => {
    // Als er een zoekopdracht is en er zijn geselecteerde categorieën
    if (query && checkedCategories.length > 0) {
      return (
        event.title.toLowerCase().includes(query.toLowerCase()) &&
        event.categoryIds.some((id) => checkedCategories.includes(id))
      );
    }
    // Als er alleen een zoekopdracht is
    else if (query) {
      return event.title.toLowerCase().includes(query.toLowerCase());
    }
    // Als er alleen geselecteerde categorieën zijn
    else if (checkedCategories.length > 0) {
      return event.categoryIds.some((id) => checkedCategories.includes(id));
    } else {
      return true;
    }
  });
  console.log(FilteredEvents);
  return (
    <div className="events_page">
      <Heading>List of events</Heading>
      <div className="events_search">
        <div className="text_search">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="category_search">
          {category &&
            category.map((cat) => (
              <label key={cat.id}>
                <input
                  type="checkbox"
                  name="category"
                  value={cat.id}
                  onChange={handleCheckboxChange}
                />
                {cat.name}
              </label>
            ))}
        </div>
      </div>
      {events && <ListDisplay events={FilteredEvents} />}
    </div>
  );
};
