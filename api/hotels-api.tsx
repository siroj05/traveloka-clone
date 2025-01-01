export function hotelsApi() {
  const dataHotels = {
    hotels: [
      {
        id: 1,
        name: "Grand Luxury Hotel",
        address: {
          street: "Jl. Sudirman No. 123",
          city: "Jakarta",
          state: "DKI Jakarta",
          country: "Indonesia",
          postalCode: "10110",
        },
        pricePerNight: 1500000,
        currency: "IDR",
        rating: 4.8,
        facilities: [
          "Free WiFi",
          "Swimming Pool",
          "Spa",
          "Gym",
          "24/7 Room Service",
          "Airport Shuttle",
        ],
        roomTypes: [
          {
            type: "Deluxe Room",
            price: 1500000,
            maxOccupancy: 2,
            bedType: "King Size",
            availability: 10,
          },
          {
            type: "Family Suite",
            price: 2500000,
            maxOccupancy: 4,
            bedType: "2 Queen Size",
            availability: 5,
          },
        ],
        policies: {
          checkInTime: "14:00",
          checkOutTime: "12:00",
          cancellationPolicy:
            "Free cancellation up to 24 hours before check-in.",
        },
        contact: {
          phone: "+62 21 5551234",
          email: "info@grandluxuryhotel.com",
        },
        images: [
          "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10007119-014228d72e280d49d13431d39835ad68.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-80,w-300",
          "https://example.com/images/hotel1-2.jpg",
          "https://example.com/images/hotel1-3.jpg",
        ],
        nearbyAttractions: [
          {
            name: "National Monument",
            distance: "2 km",
          },
          {
            name: "Grand Indonesia Mall",
            distance: "1.5 km",
          },
        ],
      },
      {
        id: 2,
        name: "Seaside Resort",
        address: {
          street: "Jl. Pantai Indah No. 45",
          city: "Bali",
          state: "Bali",
          country: "Indonesia",
          postalCode: "80361",
        },
        pricePerNight: 2000000,
        currency: "IDR",
        rating: 4.7,
        facilities: [
          "Beachfront Access",
          "Free WiFi",
          "Infinity Pool",
          "Restaurant",
          "Yoga Classes",
          "Airport Shuttle",
        ],
        roomTypes: [
          {
            type: "Ocean View Room",
            price: 2000000,
            maxOccupancy: 2,
            bedType: "Queen Size",
            availability: 7,
          },
          {
            type: "Villa with Private Pool",
            price: 4500000,
            maxOccupancy: 4,
            bedType: "King Size + Sofa Bed",
            availability: 3,
          },
        ],
        policies: {
          checkInTime: "15:00",
          checkOutTime: "11:00",
          cancellationPolicy: "Non-refundable for promotional rates.",
        },
        contact: {
          phone: "+62 361 789456",
          email: "info@seasideresortbali.com",
        },
        images: [
          "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20018167-9abc6767c9d73a3677976a383a08cf88.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-80,w-300",
          "https://example.com/images/hotel2-2.jpg",
          "https://example.com/images/hotel2-3.jpg",
        ],
        nearbyAttractions: [
          {
            name: "Uluwatu Temple",
            distance: "10 km",
          },
          {
            name: "Kuta Beach",
            distance: "5 km",
          },
        ],
      },
      {
        id: 3,
        name: "Mountain Retreat",
        address: {
          street: "Jl. Raya Puncak No. 88",
          city: "Bogor",
          state: "West Java",
          country: "Indonesia",
          postalCode: "16750",
        },
        pricePerNight: 1200000,
        currency: "IDR",
        rating: 4.5,
        facilities: [
          "Free WiFi",
          "Mountain View",
          "BBQ Area",
          "Kids Playground",
          "Parking",
          "Bicycle Rental",
        ],
        roomTypes: [
          {
            type: "Standard Room",
            price: 1200000,
            maxOccupancy: 2,
            bedType: "Twin Bed",
            availability: 15,
          },
          {
            type: "Cottage",
            price: 1800000,
            maxOccupancy: 4,
            bedType: "Queen Size + Sofa Bed",
            availability: 8,
          },
        ],
        policies: {
          checkInTime: "13:00",
          checkOutTime: "11:00",
          cancellationPolicy:
            "Free cancellation up to 48 hours before check-in.",
        },
        contact: {
          phone: "+62 251 567890",
          email: "info@mountainretreat.com",
        },
        images: [
          "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10018409-bbeef527b02d7c709adae8ff07321e6f.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-80,w-300",
          "https://example.com/images/hotel3-2.jpg",
          "https://example.com/images/hotel3-3.jpg",
        ],
        nearbyAttractions: [
          {
            name: "Taman Safari Indonesia",
            distance: "5 km",
          },
          {
            name: "Puncak Pass",
            distance: "2 km",
          },
        ],
      },
    ],
  };

  return dataHotels;
}
