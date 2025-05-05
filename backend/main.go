package main

import (
	"log"

	"github.com/gofiber/fiber/v3"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Student struct {
	gorm.Model
	Name     string
	AdmNo    string
	PhNo     string
	Guardian string
	Address  string
	Dob      string
	Blood    string
	Boarding string
	Bus      string
	Club     string
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

	app.Get("/api/", func(c fiber.Ctx) error {
		return c.SendString("This is a test API Request")
	})
	log.Fatal(app.Listen(":3000"))
}
