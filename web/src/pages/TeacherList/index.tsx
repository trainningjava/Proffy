import React, { useState, FormEvent, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../servies/api";

import "./styles.css";

interface CourseProps {
  id: number;
  course_name: string;
}

interface WeekDayProps {
  id: number;
  week_day: string;
}

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [rstTeachers, setRstTeachers] = useState([]);
  const [rstWeekDay, setRstWeekDay] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    api.get("courses").then((response) => {
      const res = response.data.map((data1: CourseProps) => {
        return { value: data1.course_name, label: data1.course_name };
      });
      setRstTeachers(res);
    });

    api.get("weekdays").then((response) => {
      const res = response.data.map((data1: WeekDayProps) => {
        return { value: data1.id, label: data1.week_day };
      });
      setRstWeekDay(res);
    });
  }, []);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await api.get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });
      setTeachers(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={rstTeachers}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={rstWeekDay}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
