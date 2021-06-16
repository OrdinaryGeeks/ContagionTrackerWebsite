using Microsoft.EntityFrameworkCore.Migrations;

namespace CMEAngularAsp.Migrations
{
    public partial class idsnotnums : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserNumber",
                table: "UserCME");

            migrationBuilder.DropColumn(
                name: "PlaceNumber",
                table: "Place");

            migrationBuilder.RenameColumn(
                name: "UserNumber",
                table: "Exposure",
                newName: "UserCMEID");

            migrationBuilder.RenameColumn(
                name: "PlaceNumber",
                table: "Exposure",
                newName: "PlaceID");

            migrationBuilder.RenameColumn(
                name: "UserNumber",
                table: "CheckIn",
                newName: "UserCMEID");

            migrationBuilder.RenameColumn(
                name: "PlaceNumber",
                table: "CheckIn",
                newName: "PlaceID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserCMEID",
                table: "Exposure",
                newName: "UserNumber");

            migrationBuilder.RenameColumn(
                name: "PlaceID",
                table: "Exposure",
                newName: "PlaceNumber");

            migrationBuilder.RenameColumn(
                name: "UserCMEID",
                table: "CheckIn",
                newName: "UserNumber");

            migrationBuilder.RenameColumn(
                name: "PlaceID",
                table: "CheckIn",
                newName: "PlaceNumber");

            migrationBuilder.AddColumn<int>(
                name: "UserNumber",
                table: "UserCME",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PlaceNumber",
                table: "Place",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
