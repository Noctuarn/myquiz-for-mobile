export const questions = [
    {id: 1,
    title: "Який 2 закон Ньютона ?",
    answers: ["А:  F = mg", "B:  F = pgV", "C:  F = kx", "D:  F = ma"],
    correct: 3,
    image: "https://images.newscientist.com/wp-content/uploads/2019/06/24172503/newton.jpg"},
    
    {
      id: 2,
      title: "Яка найбільша планета в Сонячній системі?",
      answers: ["А:  Марс", "B:  Юпітер", "C:  Венера", "D:  Сатурн"],
      correct: 1,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQEBAWFhUVFRUQEBcVFRcVFhUVFRUXFhUVFRUYHyggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy8lHyUtLS0tLSstLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUGBwj/xABBEAACAQMBBQMKAwUGBwAAAAAAAQIDBBEhBTFBUXEGEmEHEyIyQoGRobHwFFLRI2KCweFyc4OiwvEVNUNEU5PT/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAkEQEBAQACAgIBBQEBAAAAAAAAAQIDESExEkEEEzJSYXEiUf/aAAwDAQACEQMRAD8A8OAAAAAAAkJDAESRFE0RVoaJpHR9mew95fYnGHm6T/6tXMYtaepH1p9VppvR6ZsPyd7OtknVTuJ86mlPPhSWjXhJyMd8uctM8drxmysatZ92jSnUlxVOEpv4RTOnsfJztWp/2jgudScIfGLl3vke30KkKcVTpxjCKWkYRUYpeCjojIq3NmF/Iv1G04f/AF5DS8ku0XvqWy61Z/6abMj8ke0P/Lav/Eq//I9adyupJXPQr+tpP6UeM3Xku2pBZjSp1P7urD/X3TQbS7N3ltnz9rVglq5Sg+5/7F6PzPoqNx96mendeJM579ovG+WXTIOB9IbY7JbOvMurbxjN6+cp/s555tx0l/EmeedovJTXp5nZ1PPx/JLEKyXh7M+O7uvkma55ZVLh5g4kGi9cW0oScJxcZReJRknGUXylF6p9StKJrKzsYWiLRlaItFlemJoi0ZGiLRKEBEmhEoRESYmEIgMQAAASAAABAMQAAAAwAAAAABoYjJQpSnJQistvCRBErS3nVnGnTi5Tk8Rit7Z6x2Q7B0LfFa7UatXfGG+nT6r23108OJh7HbGhaxzo6kl6cuP9lcl9TqncvRRXv4I4+XmtvWXdxcEnnTbyuXx0MMLiDeN7KMKWd7LVOCWiMZx6rW8mYtyllafoidNN8TBGtFfeQe0op66lpjM/dVLvV/bF6NHcT7qRq5Xsp+rEcaVV72kT88T9s7Phq/uvTb+citUx/i4fbNbGyl7Um/kWqVpDjj4k97vqdK3OJ7vbN+Phnei3S2jB7n8mVYQprkZYTgiP+/uxHWfqVR7SdnrLaUcVo4qJYhVisVI8ln2o/uvK6PU8T7XdkrjZ01Gqu9Tk8UqsV6E+OP3ZY9l+OMrU9+d7Bb2hVoW9zTlRrRU6c1iUZbny14PimtUTnk6vXaLi9d9Pl6cTG0dt2/7Fz2dU70G5283ilPjF7/N1P3sbnxS6pcbKJ0y9sbGBog0ZmiDRdSsTRFoyNEGiUIiGwJQgwGIIIAGAgACQCGDAQAADAAAAACAHT9krPXzjWr3dDmqcctLmd5sRKEUZ8t8dNuGee3XWUXhZ0RtrdJLLZztG6b0is/fM29pYVKiTk2/DJzZ6nqOnXd93pnlfcNPdvM9GjVqPSOF47y5bWdGksywn8TLHaMVpCD5Ze7rgaz/Komv4Q6WyV7cm+eDO7aEFjEV1KtW+qPjjoR84kst9TO8nHPUXmOS+6uynBeqs+7AeelyS6I1/4zXSLx0b+hONXvLRrxXExvNfptOGfa2228uWEN1ILXvL4mv8286Sis/nWB06Li/S7slzSx8Mozu7fa/wkW6t2lrHXx8CrO8a1jq+n3kzQjjVJY8N5CnUim85z0K9rSQqPflrLGMZ3a6lyliL9bXimtPkYaMZN95Rfhv+ZPzDm3jRrg1gmIrZV7enc0Z29xBSpzXdkvo0+Ek8NPg0jwPtd2dqbPuJUJ5cfXozxhVKb3S6rc1wafDB7zbUZxWr+hrO3HZ//iNrKEY/t6Walu+bx6VPPKSWOqi+B18PJZ4rj5cT3Hz3KJiki3UgYJo7ZXLYwNEGjLJEJForWJiJMTLKoiYxMIJgAgGIYiQAAAIAABgAAAABAsWK9NHbbIoOeM7jjNnesddY1njGcGXI6OLvrw7C2lTp6L0nu+2X/wAfU0Tfd54WPrqc3a1ktM9C/wDjE9yy/A5dclnp154u/bZeced7bM9OrJPca6jN79F8WWaNRJPMvi0c2ra6JmRflVT03voHck9Eui3/AFMVu3PVPpn+TLKtHvzl+P6oyva06Eak+C3cDOq+XlxWeGCdKyXHPxZlp2kVuRMlRdZYGpS9lffiSjSm/a6LOS/ChzMtKkuHv/3LzhtZ3mkUqNlL2psu0bdR8epmcMbjNRiuZvn8dhrnrHDeZM5MkoLgQpPXdvNZxSMbydssY4LFsjFTWXqWbeP1Lzjil28N8q2wVa3rnBYp3CdeHJTz+1iv4mpf4iOFqRPf/K5svz1g6qXpW841Vz7kvQmumJKX8B4JVRpFVSSMTM8zDIvFaxMiyciBZWkIYiUIiGIIMQwJCAAAQAADAAAAAYFiyep0lhPxXxOXt95vLOa6mPJHRxV01OpGKUlNPPDinnGMfPJmVepL1Vjose/wNZaUZT0xhHTWGzcJav8AU5dZdmdq1CVVPRt5365N3a2bmsOOhmtbdJ4SyzaU5NYUV73p8Cn6faby9HZ2b0SWm42EaOB203xf8jI5rvL7ZacUZXltEKa46Filh6RWnFmGpjgWLalJ7loa544x1u1hksyxv4F63jhZxj70JULDizPNRjpnU1nGz1tVq5em5E6UWpLRYxgw1rpx9lacsfFkpXLSy3v3aL9C3ie1fNX/ADCYfh4p5bNZWv5LCjJPn6Oq+BgV3Pe3w3PcU1y4i84t1vVUjnCwSVZcsa4epo6ddpe/Omg1cJLV8cmd/Jn1F5+PW12nbxuaNWhJaVKc6T/ji4/zPlqrnisPiuT4o+nrSum1qfN/aij5u8uYfluK6XTzssfLBbj381dY+LUTMUjJIxyNozrHIgybIMsrURMbEyUIsGNiYQAYASEAAAMQ2IBgAAAxDAcN50Oy8HOm72VU0Kbi+K7jZc4JKWNVwOnto95fl03LjpxfLJx2ynnrw+h2OzlJx1Mvi1+VW7Sl3d8teJdhwUUFG2illtZer1LNG5prSOMrXeT8Ffky0bWctcP4YLMLB/mX1NdU2k+84yknhZ0ZXq7S19Gbxjhph9eJF1x59rTG9em6rruLVL3ErC/i8qOPHic9W2hOfFr6+8x0e8tE2s7/ABM7+Vmeo0n4uuvNdJc7TxJR7y8WnuK09oRWVGKfi/maiMH0M0Y4MN8+r/TbHBmf2sqpnVsbqZ4lR1VuWr+XvDx0MLtvMJ1r3HBv3FavdTk8RTxxMnovxJKcU9X/ACKfJb49J0oSeMyfIt0rP8z6ZZQV42/QT++RsLRTerWvj+hMtV1G0slFYwfP3b3/AJjd/wB/P6n0NZWr0b/ofOHayt5y9up87mvjoqskvkkd348rh5bO2lkQkTkY5HVGFQkQZORAsqiIYiUIsGAMIAMQEgAAABDYgGAhgA0IAGX9mVEnqUCdOWHkizuJl8u/2Xf04LOqNxLbUljuvR6/066nCWVzlG6te813uBjddOjOO3S/8TqTa1eNe8t3wwWLao97bw3l6mmt5Zx3VpucnuXib2fm6aSj6Umk+fx5I5961XRjGYs0Mt4WrfxLs6ShhyerWmudeWhUt7xU6ba9Z6RfN8X9SFJuTc5vL4nLuyOnEt/xbVyt+GP8clwYlUhyMmYPejH5Nfh/SUbzPQk6qe/LXjovgY5WMXrFjhaJes/mDwyK48EuQ4xc5YTzx10S93EyU6dOPFe7UsQTbzGLJ6VtFK3SfpZf0+RajbwfAlSt5PWRZpQSeXqdGOK33PDm3yyer5FtZwXDPU2lGnHG5FKE+RZpZZ1Zzmeo5d61fdWLu8jRpTqyfo04TqS4JKEXJ/Q+Va1RyblJ5k/Sl4t6t/E978q20/w+zpwT9KvKNvHo/Sqf5IyX8SPAZs1yzrFIxsnJmNsvFaiyDJSIssqQgYmSghDEEAAAkAAACAAABiABgAAMBDAuWdQ6WzvfQ7q46fHccfCWGbayudMGW42xp19nXXquTSXrOKy9/UvW0lhLvaNtt4w8Jcfh80c5bXOMNb1qX6FWUnni9P6HPuOvjbinV7z03LSPTP1NlSed/wB4NXawfJl6OcYeeRw8k8u/FnS2qyXiWIVDXwhgzwT4GXx7XuulqnVfPibK2sXJZl6K+b9xRs6Ti8vV8PA2ULh513/eDo4uCXzpy83PZ4yu29KnDxLXfXBeBrqabepfjBLVtHbnj69eHDvfd8+UvOEoxbMNSrH2XkcZSl4IjWsz35M51f6WabRsKMuCNfTwil2v7Qx2daTr6ecf7O3i/aqyTw2vyx1k/CPiZzdt6idYk815j5Ydu+fvFbweYW0XTfjVlh1H7sQj4OMjz6TJ1qrk3KTbbblJvVtt5bb4tvUwtnXmdRhaTZBjbINllaTIjYi0VJiYCCAIAAAACQAAAIAAAAAAYCGADEADM1rUw9TCBFnaZenV7Oq09O8dHY3lOOGorwZ53aXGDobK70x0+RlZ02ltd3R2jJ5xv/2RcVXvcc6cvvJydrc+JtrW78EZ66+2mZfpuFHPDcvdktQo4XiauF3JLfglG7nL1U3jfgz/AOZ9NOt37bnRLV9Ehd9J6dDU0K2dZPHJPcXYXEeG/wAERd36TOOd+WwjXfMzwbe9lGk5SLapZ9b3mV3b7aTEnpnp1ok4Sk3yRCjSb9SOnN/yNhQoQpxlUqySjFOc5SeIxitW5Se5EFsjJSlCnCVSpJQpwTnOUtFGK1bZ4N287Uy2lcuosqlTzTtoveoZ1nJfmlhN8sJcDaeUft076X4a2bVrB5b3OvJbpSXCCe6L6vXGOEbOvi4/j5vtx8m+6k2RbE2RbN2VDItg2RZKAJg2IlAYgEEAAAAAAJAIYgAAAAAAAAAAGAAADEADLdpdd1lQCLO0y9OotLzPE29tceJw9vcuJvdn7TRjrDpxySuto1GzaWUJJcs6PD39TQ2V6uZurW7Rz67dEbOjQzvZftraK4GvpVm92DY28HL1n7kZVdejjmkixSnn1V73+hr726trZd+5rQprGnffpP8AswWsn0TOO275VIQThYUu893naqwl4wpLV9ZNdCc8etelN8mc+3oW1dq0LOn566qqEfZW+U3+WEVrJ/Tjg8a7bdu6+0X5qKdK3TzGmnrPD0lVa3vj3dy8WsnM7T2lWuajrXFWVSb0cpPhyS3RWu5YRVydfHwzP+uTfJdJZFkWRZNWfZibE2IlAE2DYiUAQAEAQAAAAEgAAAQAAAAAAAAAAAAAMAAAAAAAABgmAAWqG0KkN0vibO37UVYeyn72gArcZv0vN6nqri7dXK9SnTXVSl/NFa77Z7QqLH4iUFyppU/80fS+YAROPM+k3k1fdaOpUlJuUm3J6tt5b6t7xZGBZUshkYEBZAAABZACUEIACAIAAAACQAAAAgAAAAAAAAP/2Q=="
    },
  
    {
      id: 3,
      title: "Який найбільший океан ?",
      answers: ["A:  Тихий", "B:  Атлантичний", "C:  Індійський", "D:  Український"],
      correct: 0,
      image: "https://www.thoughtco.com/thmb/g8h6NnWWWVkm-KXNBgMx-0Edd2U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages_482194715-56a1329e5f9b58b7d0bcf666.jpg"
    },
  
    {
      id: 4,
      title: "Який найбільший павук на Землі?",
      answers: ["А: Чорна вдова", "B: Тарантул ", "C:  Голіаф-птахоїд", "D:  Каракут"],
      correct: 2,
      image: "https://vsviti.com.ua/wp-content/uploads/2013/03/Theraphosa_blondi_1-620x465.jpg"
    },
  ]