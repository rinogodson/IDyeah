package main

import (
	"log"

	"github.com/gofiber/fiber/v3"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Student struct {
	gorm.Model
	Name     string `json:"name"`
	AdmNo    string `json:"adm"`
	PhNo     string `json:"ph"`
	Guardian string `json:"guardian"`
	Address  string `json:"address"`
	Dob      string `json:"dob"`
	Blood    string `json:"blood"`
	Boarding string `json:"bp"`
	Bus      string `json:"bus"`
	Club     string `json:"club"`
	Image    string
}

func main() {
	// DB init
	db, err := gorm.Open(sqlite.Open("data.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect DB: ", err)
	}

	err = db.AutoMigrate(&Student{})
	if err != nil {
		log.Fatal("Migration Failed: ", err)
	}

	app := fiber.New()

	app.Get("/", func(c fiber.Ctx) error {
		return c.SendString("Hello World, this is a test backend for IDyeah.")
	})

	app.Post("/add", func(c fiber.Ctx) error {
		var s Student
		if err := c.Bind().JSON(&s); err != nil {
			return c.Status(fiber.StatusBadRequest).SendString("Failed to parse body" + err.Error())
		}
		db.Create(&Student{Name: s.Name, AdmNo: s.AdmNo, PhNo: s.PhNo, Guardian: s.Guardian, Address: s.Address, Dob: s.Dob, Club: s.Club, Image: "", Blood: s.Blood, Boarding: s.Boarding, Bus: s.Bus})
		return c.SendString("Value Added to the DB!")
	})

	app.Post("/edit", func(c fiber.Ctx) error {
		type ReqType struct {
			From int64   `json:"from"`
			To   Student `json:"to"`
		}
		var s ReqType
		if err := c.Bind().JSON(&s); err != nil {
			return c.Status(fiber.StatusBadRequest).SendString("Check the format")
		}
		var val Student
		db.First(&val, s.From)
		db.Model(&s).Update("name", s.To.Name)
		return c.SendString("Changes Made")
	})

	app.Get("/api/", func(c fiber.Ctx) error {
		return c.SendString("This is a test API Request")
	})
	log.Fatal(app.Listen(":3000"))
}
