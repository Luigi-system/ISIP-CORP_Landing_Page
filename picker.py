# Requiere: pip install pyautogui pillow
import pyautogui

# Obtiene las coordenadas del ratón
x, y = pyautogui.position()

# Captura el color del píxel en esa posición
color = pyautogui.screenshot().getpixel((x, y))

print(f"Color en la posición {x}, {y}: {color} (RGB)")