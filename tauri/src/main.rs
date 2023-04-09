#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;

#[tauri::command]
fn load_slideshow(filepath: String) -> Result<String, String> {
	// Err("This failed!".into())
	Ok("This worked!".into())
 }

#[tauri::command]
async fn close_splash(window: tauri::Window) {
  // Close splashscreen
  if let Some(splashscreen) = window.get_window("splash") {
    splashscreen.close().unwrap();
  }
}

fn main() {
  tauri::Builder::default()
		.invoke_handler(tauri::generate_handler![close_splash, load_slideshow])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
