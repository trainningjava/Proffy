import Knex from "knex";

export async function up(knex: Knex) {
  return knex("course").insert([
    { course_name: "Artes" },
    { course_name: "Biologia" },
    { course_name: "Ciências" },
    { course_name: "Educação física" },
    { course_name: "Física" },
    { course_name: "Geografia" },
    { course_name: "História" },
    { course_name: "Matemática" },
    { course_name: "Português" },
    { course_name: "Química" },
  ]);
}

export async function down(knex: Knex) {
  return knex("course").del("*");
}
