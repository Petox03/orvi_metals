'use client';
import React from "react";

import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    User,
    Pagination,
} from "@nextui-org/react";
import { PlusIcon } from "@/components/icons";
import { VerticalDotsIcon } from "@/components/icons";
import { SearchIcon } from "@/components/icons";
import { ChevronDownIcon } from "@/components/icons";

const statusColorMap = {
    complete: "success",
    rejected: "danger",
    pending: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "cliente", "status", "fechac", "deadline", "price", "actions"];

export default function App() {

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    const columns = [
        { name: "ID ORDER", uid: "id", sortable: true },
        { name: "CLIENTE", uid: "cliente", sortable: true },
        { name: "STATUS", uid: "status", sortable: true },
        { name: "FECHA DE CREACIÓN", uid: "fechac", sortable: true },
        { name: "DEADLINE", uid: "deadline", sortable: true },
        { name: "PRICE", uid: "price", sortable: true },
        { name: "ACTIONS", uid: "actions" },
    ];

    const statusOptions = [
        { name: "Complete", uid: "complete" },
        { name: "Pending", uid: "pending" },
        { name: "Rejected", uid: "rejected" },
    ];

    const users = [
        {
            id: 1,
            cliente: "Tony Reichert",
            status: "complete",
            fechac: "Abril 10, 2023",
            deadline: "Abril 15, 2023",
            price: "$1500.10",
        },
        {
            id: 2,
            cliente: "Zoey Lang",
            status: "pending",
            fechac: "Diciembre 21, 2023",
            deadline: "Diciembre 28, 2023",
            price: "$3000.09",
        },
        {
            id: 3,
            cliente: "Jane Fisher",
            status: "complete",
            fechac: "Febrero 20, 2023",
            deadline: "Febrero 27, 2023",
            price: "$1200.50",
        },
        {
            id: 4,
            cliente: "William Howard",
            status: "rejected",
            fechac: "Mayo 15, 2023",
            deadline: "Mayo 24, 2023",
            price: "$4000.91",
        },
        {
            id: 5,
            cliente: "Kristen Copper",
            status: "complete",
            fechac: "Febrero 17, 2023",
            deadline: "Febrero 27, 2023",
            price: "$2300.5",
        },
        {
            id: 6,
            cliente: "Brian Kim",
            status: "complete",
            fechac: "Enero 10, 2023",
            deadline: "Enero 18, 2023",
            price: "$2100.42",
        },
        {
            id: 7,
            cliente: "Michael Hunt",
            status: "pending",
            fechac: "Sepriembre 15, 2023",
            deadline: "Sepriembre 28, 2023",
            price: "$2100.20",
        },
        {
            id: 8,
            cliente: "Samantha Brooks",
            status: "complete",
            fechac: "Julio 20, 2023",
            deadline: "Julio 30, 2023",
            price: "$2300.43",
        },
        {
            id: 9,
            cliente: "Frank Harrison",
            status: "rejected",
            fechac: "Agosto 15, 2023",
            deadline: "Agosto 27, 2023",
            price: "$2000.25",
        },
        {
            id: 10,
            cliente: "Emma Adams",
            status: "complete",
            fechac: "Agosto 10, 2023",
            deadline: "Agosto 20, 2023",
            price: "$5500.42",
        },
        {
            id: 11,
            cliente: "Brandon Stevens",
            status: "complete",
            fechac: "Noviembre 14, 2023",
            deadline: "Noviembre 20, 2023",
            price: "$4100.25",
        },
        {
            id: 12,
            cliente: "Megan Richards",
            status: "pending",
            fechac: "Noviembre 20, 2023",
            deadline: "Noviembre 30, 2023",
            price: "$3800.50",
        },
        {
            id: 13,
            cliente: "Oliver Scott",
            status: "complete",
            fechac: "Mayo 12, 2023",
            deadline: "Mayo 27, 2023",
            price: "$5100.43",
        },
        {
            id: 14,
            cliente: "Grace Allen",
            status: "complete",
            fechac: "Enero 10, 2023",
            deadline: "Enero 24, 2023",
            price: "$1600.24",
        },
        {
            id: 15,
            cliente: "Noah Carter",
            status: "pending",
            fechac: "Diciembre 14, 2023",
            deadline: "Diciembre 22, 2023",
            price: "$2900.30",
        },
        {
            id: 16,
            cliente: "Ava Perez",
            status: "complete",
            fechac: "Julio 17, 2023",
            deadline: "Julio 27, 2023",
            price: "$4200.09",
        },
        {
            id: 17,
            cliente: "Liam Johnson",
            status: "complete",
            fechac: "Agosto 2, 2023",
            deadline: "Agosto 14, 2023",
            price: "$1400.32",
        },
        {
            id: 18,
            cliente: "Sophia Taylor",
            status: "complete",
            fechac: "Julio 5, 2023",
            deadline: "Julio 13, 2023",
            price: "$2100.50",
        },
        {
            id: 19,
            cliente: "Lucas Harris",
            status: "pending",
            fechac: "Septiembre 25, 2023",
            deadline: "Noviembre 2, 2023",
            price: "$2300.43",
        },
        {
            id: 20,
            cliente: "Mia Robinson",
            status: "complete",
            fechac: "Abril 15, 2023",
            deadline: "Abril 15, 2023",
            price: "$2100.20",
        },
    ];


    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...users];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.cliente.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.status),
            );
        }

        return filteredUsers;
    }, [users, filterValue, statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <VerticalDotsIcon className="text-default-300" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem>View</DropdownItem>
                                <DropdownItem className="text-danger" >Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                    Status
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {capitalize(status.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button color="primary" endContent={<PlusIcon />}>
                            Add New
                        </Button>
                        
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {users.length} Orders</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onRowsPerPageChange,
        users.length,
        onSearchChange,
        hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-center items-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    return (
        <Table
            aria-label="Example table with custom cells, pagination and sorting"
            isHeaderSticky
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={{
                wrapper: "max-h-[382px]",
            }}
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
        >
            <TableHeader columns={headerColumns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        align={column.uid === "actions" ? "center" : "start"}
                        allowsSorting={column.sortable}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"No users found"} items={sortedItems}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
