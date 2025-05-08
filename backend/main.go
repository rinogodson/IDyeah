package main

	// CRUD Operations
	// C - Create done
	// R - Read
	// U - Update done
	// D - Delete

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
		log.Fatal("⚠️Failed to Migrate the Database: ", err)
	}

	app := fiber.New()

	app.Get("/", func(c fiber.Ctx) error {
		return c.SendString("Pong! this is the backend for IDyeah")
	})

	// Create
	app.Post("/create", func(c fiber.Ctx) error {
		var s Student
		if err := c.Bind().JSON(&s); err != nil {
			return c.Status(fiber.StatusBadRequest).SendString("Failed to parse body" + err.Error())
		}
		db.Create(&Student{Name: s.Name, AdmNo: s.AdmNo, PhNo: s.PhNo, Guardian: s.Guardian, Address: s.Address, Dob: s.Dob, Club: s.Club, Image: "", Blood: s.Blood, Boarding: s.Boarding, Bus: s.Bus})
		return c.SendString("Value Added to the DB!")
	})

	// Update
	app.Post("/update", func(c fiber.Ctx) error {
		var s struct {
			From int64   `json:"from"`
			To   Student `json:"to"`
		}

		if err := c.Bind().JSON(&s); err != nil {
			return c.Status(fiber.StatusBadRequest).SendString("Check the format")
		}
		var val Student
		db.First(&val, s.From)
		db.Model(&val).Update("name", s.To.Name)
		db.Model(&val).Update("adm", s.To.AdmNo)
		db.Model(&val).Update("ph", s.To.PhNo)
		db.Model(&val).Update("guardian", s.To.Guardian)
		db.Model(&val).Update("address", s.To.Address)
		db.Model(&val).Update("dob", s.To.Dob)
		db.Model(&val).Update("blood", s.To.Blood)
		db.Model(&val).Update("boarding", s.To.Boarding)
		db.Model(&val).Update("bus", s.To.Bus)
		db.Model(&val).Update("club", s.To.Club)
		return c.SendString("Changes Made")
	})

	// Delete
	app.Post("/delete", func(c fiber.Ctx) error {
		var r struct {
			Id int64 `json:"id"`
		}

		if err := c.Bind().JSON(&r); err != nil {
			return c.Status(fiber.StatusBadRequest).SendString("Check the format")
		}

		var val Student
		db.First(&val, r.Id)
		db.Delete(&val)
		return c.SendString("Deleted")
	})

	// Read
	app.Get("/read", func(c fiber.Ctx) error {
		var s []Student
		db.Find(&s)
		return c.JSON(s)
	})

	log.Fatal(app.Listen(":3000"))
}
